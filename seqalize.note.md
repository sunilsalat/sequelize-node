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

# Operations

const { Op } = require("sequelize");
Post.findAll({
where: {
[Op.and]: [{ a: 5 }, { b: 6 }], // (a = 5) AND (b = 6)
[Op.or]: [{ a: 5 }, { b: 6 }], // (a = 5) OR (b = 6)
someAttribute: {
// Basics
[Op.eq]: 3, // = 3
[Op.ne]: 20, // != 20
[Op.is]: null, // IS NULL
[Op.not]: true, // IS NOT TRUE
[Op.or]: [5, 6], // (someAttribute = 5) OR (someAttribute = 6)

      // Using dialect specific column identifiers (PG in the following example):
      [Op.col]: 'user.organization_id',        // = "user"."organization_id"

      // Number comparisons
      [Op.gt]: 6,                              // > 6
      [Op.gte]: 6,                             // >= 6
      [Op.lt]: 10,                             // < 10
      [Op.lte]: 10,                            // <= 10
      [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
      [Op.notBetween]: [11, 15],               // NOT BETWEEN 11 AND 15

      // Other operators

      [Op.all]: sequelize.literal('SELECT 1'), // > ALL (SELECT 1)

      [Op.in]: [1, 2],                         // IN [1, 2]
      [Op.notIn]: [1, 2],                      // NOT IN [1, 2]

      [Op.like]: '%hat',                       // LIKE '%hat'
      [Op.notLike]: '%hat',                    // NOT LIKE '%hat'
      [Op.startsWith]: 'hat',                  // LIKE 'hat%'
      [Op.endsWith]: 'hat',                    // LIKE '%hat'
      [Op.substring]: 'hat',                   // LIKE '%hat%'
      [Op.iLike]: '%hat',                      // ILIKE '%hat' (case insensitive) (PG only)
      [Op.notILike]: '%hat',                   // NOT ILIKE '%hat'  (PG only)
      [Op.regexp]: '^[h|a|t]',                 // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
      [Op.notRegexp]: '^[h|a|t]',              // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
      [Op.iRegexp]: '^[h|a|t]',                // ~* '^[h|a|t]' (PG only)
      [Op.notIRegexp]: '^[h|a|t]',             // !~* '^[h|a|t]' (PG only)

      [Op.any]: [2, 3],                        // ANY (ARRAY[2, 3]::INTEGER[]) (PG only)
      [Op.match]: Sequelize.fn('to_tsquery', 'fat & rat') // match text search for strings 'fat' and 'rat' (PG only)

      // In Postgres, Op.like/Op.iLike/Op.notLike can be combined to Op.any:
      [Op.like]: { [Op.any]: ['cat', 'hat'] }  // LIKE ANY (ARRAY['cat', 'hat'])

      // There are more postgres-only range operators, see below
    }

}
});

# Postgres-Range Operations

[Op.contains]: 2, // @> '2'::integer (PG range contains element operator)
[Op.contains]: [1, 2], // @> [1, 2) (PG range contains range operator)
[Op.contained]: [1, 2], // <@ [1, 2) (PG range is contained by operator)
[Op.overlap]: [1, 2], // && [1, 2) (PG range overlap (have points in common) operator)
[Op.adjacent]: [1, 2], // -|- [1, 2) (PG range is adjacent to operator)
[Op.strictLeft]: [1, 2], // << [1, 2) (PG range strictly left of operator)
[Op.strictRight]: [1, 2], // >> [1, 2) (PG range strictly right of operator)
[Op.noExtendRight]: [1, 2], // &< [1, 2) (PG range does not extend to the right of operator)
[Op.noExtendLeft]: [1, 2], // &> [1, 2) (PG range does not extend to the left of operator)
