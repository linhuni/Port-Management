# Container Port Management System

Java OOP-based system simulating container port operations.

## Features
- Manage ports, vehicles, containers
- Load/unload containers
- Vehicle movement between ports
- OOP design with inheritance and polymorphism

## Tech
- Java
- OOP (abstract class, inheritance)
- Git

## How to run
- Compile and run Main.java

# Port Management System

## Overview
This project is a **Java-based Port Management System** that models the movement of vehicles (trucks, ships) between ports using object-oriented design principles.  
The system focuses on **clear domain logic**, **state management**, and **extensibility**, suitable for learning OOP and preparing for backend or system design roles.

---

## Core Concepts

### 1. Port
- Represents a physical port.
- Each port has:
  - A **randomly generated ID**
  - Name
  - Location (can be extended with latitude/longitude)
  - A list of **vehicles currently at the port**
- Ports do **not** control movement logic.

---

### 2. Vehicle
- Abstract base class for all vehicles.
- Tracks:
  - Current port
  - Carrying capacity
  - Containers being carried
- Child classes:
  - 
  - 
- Each vehicle defines its own landing ability logic.

---

### 3. Container
- Abstract container type.
- Subclasses:
  - 
  - 
  - 
- Each container defines which vehicle types can carry it.

---

### 4. Trip
- Re

