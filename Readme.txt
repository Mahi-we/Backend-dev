✅ Exercise 1: Database Selection (SQL vs NoSQL)
1. Online Banking System → SQL
Needs high consistency & accuracy
Transactions must follow ACID properties
Example: balance updates cannot be wrong

👉 Hence, Relational DB (MySQL, PostgreSQL) is best

2. Social Media Platform → NoSQL
Handles huge unstructured data (posts, images, comments)
Needs high scalability
Flexible schema

👉 Use NoSQL (MongoDB, Cassandra)

3. Real-time Chat Application → NoSQL
Requires fast reads/writes
Messages are semi-structured

4. Hospital Patient Records → SQL
Requires strict consistency
Sensitive data (medical records)
Structured format

👉 Use SQL (PostgreSQL, Oracle)

5. IoT Sensor Data Collection → NoSQL
Huge volume of continuous data
Needs high scalability & flexibility

👉 Use NoSQL (MongoDB, InfluxDB)

✅ Exercise 2: CAP Theorem Analysis

(CAP = Consistency, Availability, Partition Tolerance)

1. Stock Trading Platform → CP
Consistency is critical (no wrong trades)
Can sacrifice availability briefly
2. Content Delivery Network → AP
Must always be available
Slight inconsistency is acceptable
3. Airline Booking System → CP
Seat booking must be accurate
No double booking allowed
4. Video Streaming Service → AP
Availability is priority
Minor delays or inconsistencies are okay
