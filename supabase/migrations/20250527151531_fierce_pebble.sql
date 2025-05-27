/*
  # Initial Schema Setup for LuxStay

  1. New Tables
    - `rooms`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `full_description` (text)
      - `price` (numeric)
      - `capacity` (int)
      - `size` (int)
      - `bed_type` (text)
      - `view_type` (text)
      - `images` (text[])
      - `amenities` (text[])
      - `policies` (text[])
      - `created_at` (timestamptz)
      
    - `bookings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `room_id` (uuid, references rooms)
      - `check_in` (date)
      - `check_out` (date)
      - `guests` (int)
      - `total_price` (numeric)
      - `status` (text)
      - `special_requests` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create rooms table
CREATE TABLE rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  full_description text,
  price numeric NOT NULL,
  capacity int NOT NULL,
  size int NOT NULL,
  bed_type text NOT NULL,
  view_type text NOT NULL,
  images text[] NOT NULL,
  amenities text[] NOT NULL,
  policies text[] NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  room_id uuid REFERENCES rooms NOT NULL,
  check_in date NOT NULL,
  check_out date NOT NULL,
  guests int NOT NULL,
  total_price numeric NOT NULL,
  status text NOT NULL,
  special_requests text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies for rooms
CREATE POLICY "Anyone can view rooms"
  ON rooms
  FOR SELECT
  TO public
  USING (true);

-- Policies for bookings
CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);