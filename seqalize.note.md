# Supported DataTypes

1. String: DataTypes.STRING
   Example: 'John Doe'

2. Text (long string): DataTypes.TEXT
   Example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'

3. Integer: DataTypes.INTEGER
   Example: 123

4. Float (decimal number): DataTypes.FLOAT
   Example: 3.14

5. Double (double-precision floating-point number): DataTypes.DOUBLE
   Example: 6.022e23

6. Decimal (exact decimal number): DataTypes.DECIMAL
   Example: 123.45

7. Boolean: DataTypes.BOOLEAN
   Example: true or false

8. Date (date without time): DataTypes.DATE
   Example: '2024-04-04'

9. Time (time without date): DataTypes.TIME
   Example: '14:30:00'

10. Date-Time (date and time): DataTypes.DATE
    Example: '2024-04-04 14:30:00'

11. JSON (JSON object): DataTypes.JSON
    Example: { "key": "value" }

12. JSONB (binary JSON object for PostgreSQL): DataTypes.JSONB
    Example: { "key": "value" }

13. Array (array of values): DataTypes.ARRAY(DataTypes.STRING)
    Example: ['apple', 'banana', 'cherry']

14. UUID (Universally Unique Identifier): DataTypes.UUID
    Example: '550e8400-e29b-41d4-a716-446655440000'

15. Enum (enumerated values): DataTypes.ENUM('value1', 'value2', 'value3')
    Example: 'value1' or 'value2'

16. Blob (binary large object): DataTypes.BLOB
    Example: Binary data (e.g., images)

17. Geography (geographic data for PostgreSQL/PostGIS): DataTypes.GEOGRAPHY
    Example: Point, LineString, Polygon, etc.

# Array operation
