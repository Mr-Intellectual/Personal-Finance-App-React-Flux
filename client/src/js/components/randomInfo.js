const maleNames = ["Gerardo", "Brent", "Holden", "Deandre", "Grady", "Freddy", "Aydan", "Aydin", "Isaias", "Simeon", "Sergio", "Dean", "Cale", "Callum", "Sheldon", "Jaydin", "Nicholas", "Liam", "Quinton", "Tanner", "Luke", "James", "Luis", "Tobias", "Marcel", "Eddie", "Chris", "Skylar", "Ian", "Barrett", "Jordyn", "August", "Trace", "Aiden", "Owen", "Tripp", "Ariel", "Colten", "Triston", "Branden", "Brennen", "Maximus", "Taylor", "Cesar", "Alvin", "Micheal", "Brendon", "Miles", "Bryce", "Ben", "Graham", "Jaydon", "Jamison", "Willie", "Leroy", "Quentin", "Reuben", "Jimmy", "Hugh", "Jean", "Jonathan", "Derrick", "Declan", "Landyn", "Dayton", "Maxwell", "Theodore", "Ali", "Giancarlo", "Cannon", "Felipe", "Mark", "Colin", "Reed", "Zayne", "Javier", "Pierce", "Jayden", "Eugene", "Omar", "Adrian", "Isiah", "Kai", "Ezekiel", "Sidney", "Antwan", "Leonard", "Jaeden", "Will", "Salvador", "Deangelo", "Adrien", "Matthias", "Jeremiah", "Fabian", "Jamarcus", "Yadiel", "Mike", "Julio", "Sterling", "Caden", "Emmanuel", "Ricky", "Jerimiah", "Kasen", "Phillip", "Andreas", "Brayden", "Korbin", "Philip", "Kason", "Harold", "Cristofer", "Caleb", "Wesley", "Junior", "Abraham", "Devan", "Spencer", "Jackson", "Ean", "Steve", "Clarence", "Malik", "Lane", "Dawson", "Rowan", "Jagger", "Lee", "Roman", "Mohammed", "Maddox", "Aaron", "Joe", "Reynaldo", "Ivan", "Trystan", "Edwin", "Dillan", "Camren", "Lucas", "Leonardo", "Wilson", "Davion", "Marley", "Edgar", "Jorden", "Omari", "Jasper", "Vincent", "Felix", "Larry", "Phoenix", "Shaun", "Deven", "Clay", "Conrad", "Damari", "Melvin", "Johan", "Immanuel", "Duncan", "Eden", "Micah", "Grant", "Elliot", "Zander", "Yair", "Lucian", "Landon", "Guillermo", "Reginald", "Rory", "Rigoberto", "Brayan", "Leonel", "Landen", "Richard", "Bronson", "Jayson", "Jaime", "Everett", "Easton", "Bryant", "Armani", "Brenden", "Kamren", "Jesse", "Jovani", "Colton", "Adam", "King", "Maverick", "Rohan", "Desmond", "Braedon", "Elisha", "Izaiah", "Brice", "Cyrus"]

const femaleNames = ["Cindy", "Kailyn", "Maryjane", "Elisabeth", "Hanna", "Gillian", "Jaylee", "Aliyah", "Krystal", "Athena", "Wendy", "Shyanne", "Kaylin", "Delilah", "Kyra", "Courtney", "Camila", "Kelsie", "Salma", "Shania", "Denise", "Kimora", "Julia", "Diya", "Zoey", "Ariel", "Gabriella", "Camryn", "Emelia", "Josie", "Jaida", "Elaina", "Dulce", "Karli", "Kimberly", "Clarissa", "Aimee", "Halle", "Jenny", "Yamilet", "Carolyn", "Makayla", "Kathleen", "Miracle", "Eleanor", "Azaria", "Sabrina", "Makenzie", "Alyssa", "Siena", "Lia", "Addison", "Lindsay", "Francesca", "Sharon", "Summer", "Amy", "Miah", "Tania", "Yoselin", "Alyson", "Aryana", "Violet", "Gisselle", "Taylor", "Kamora", "Kaylen", "Diana", "Kaya", "Lorena", "Mariam", "Harper", "Nevaeh", "Shirley", "Regan", "Sarahi", "Azul", "Jayden", "Dana", "Paityn", "Eve", "Rose", "Leilani", "Tia", "Camilla", "Ashlyn", "Cynthia", "Abigayle", "Harmony", "Elena", "Elizabeth", "Savanna", "Jaslyn", "Yesenia", "Esmeralda", "Hailie", "Jayla", "Renee", "Alani", "Reagan", "Bethany", "Breanna", "Mckinley", "Jaslene", "Kathryn", "April", "Sloane", "Madilyn", "Valery", "Emmalee", "Rayna", "Elsie", "Paige", "Monserrat", "Tara", "Kailey", "Belen", "Jazlene", "Mckayla", "Quinn", "Helena", "Hailee", "Kaley", "Kristen", "Heaven", "Ingrid", "Kaitlynn", "Aurora", "Phoebe", "Jacquelyn", "Journey", "Lacey", "Imani", "Kaylyn", "Alexis", "Ayanna", "Nataly", "Simone", "Jaiden", "Avery", "Sherlyn", "Lola", "Alexandra", "Alicia", "Emerson", "Isla", "Yazmin", "Evelyn", "Jaylynn", "Janet", "Allyson", "Hadley", "Maliyah", "Hallie", "Cora", "London", "Paula", "Saniyah", "Eileen", "Angie", "Alina", "Lilliana", "Lucia", "Leslie", "Sydnee", "Precious", "Averi", "Taniyah", "Pamela", "Riya", "Miya", "Veronica", "Valeria", "Mireya", "Mallory", "Yaretzi", "Tiana", "Iris", "Carlee", "Haleigh", "Faith", "Elsa", "Meghan", "Sage", "Johanna", "Perla", "Nathaly", "Anaya", "Avah", "Ashtyn", "Sonia", "Stephanie", "Macy", "Ireland", "Miley", "Adeline", "Ariana", "Shyla", "Stephany", "Annabelle"]

const lastNames = ["Gregory", "Robinson", "Rhodes", "Fernandez", "Caldwell", "Spencer", "Meadows", "Hunter", "Hardin", "Arias", "Khan", "Waters", "Lowe", "Mckee", "Leon", "Tanner", "Stokes", "Wood", "Solis", "Dunn", "Riley", "Montgomery", "Franklin", "Stephenson", "Powell", "Moyer", "Sloan", "Kemp", "Macias", "Whitehead", "Doyle", "Baxter", "Graves", "Carrillo", "Sullivan", "Wheeler", "Bright", "Velazquez", "Ramsey", "Sherman", "Martinez", "Hogan", "Jenkins", "Barajas", "Gardner", "Moss", "Trujillo", "Medina", "Graham", "Bullock", "Navarro", "Wilcox", "Kirby", "Gross", "Hammond", "Farley", "Stark", "Madden", "Guzman", "Cervantes", "Combs", "Boone", "Hancock", "Wade", "Mcclain", "Middleton", "Weiss", "Chambers", "Phillips", "Haney", "Shelton", "Wu", "Ryan", "Lawson", "Gonzalez", "Oneill", "Morris", "Miles", "Olson", "Zuniga", "Sheppard", "Sims", "Mahoney", "Mayo", "Pugh", "Cameron", "Buchanan", "Bryan", "Sweeney", "Alvarez", "Bishop", "Werner", "Roberson", "Morrow", "Hatfield", "Olsen", "Hawkins", "Hess", "Conrad", "Hodge", "White", "Macdonald", "Mcconnell", "Sawyer", "Austin", "Carney", "Casey", "Stone", "Henry", "Huynh", "Rivera", "Obrien", "Booth", "Duke", "Oconnor", "Velasquez", "Lang", "Bridges", "Noble", "Alexander", "Bond", "Owens", "Salazar", "Horne", "Wilkerson", "Lozano", "Levine", "Novak", "Leonard", "Lynch", "Cabrera", "Castro", "Valenzuela", "Kaiser", "Serrano", "Lane", "Snow", "Collins", "Oconnell", "Riddle", "Sellers", "Hutchinson", "Douglas", "Vance", "Neal", "Hobbs", "Davila", "Zhang", "Ayala", "Salinas", "Pitts", "Cohen", "Erickson", "Herrera", "Mann", "Schwartz", "Acevedo", "Shea", "Mcintosh", "Stout", "Watkins", "Petersen", "Mcdowell", "Fowler", "Palmer", "Wiggins", "Rosales", "Brock", "Hampton", "Davenport", "Garcia", "Black", "Mcfarland", "Hart", "Pena", "Price", "Delgado", "Holland", "Shah", "Mcgee", "Waller", "Murphy", "Wall", "Fields", "Dawson", "Larsen", "Griffith", "Carr", "Hull", "Lewis", "Gill", "Mccarty", "Jimenez", "Mills", "Curry", "Walls", "Edwards", "Bradshaw", "Hansen", "Clarke", "Mullins", "Mathis", "Cross", "Stephens", "Norris", "Mercer", "Compton", "Potter", "Turner", "Alvarado", "Rivers", "Simmons", "Morse", "Leblanc", "Skinner", "Valencia", "Bonilla", "Vincent", "Warren", "Carey", "Nixon", "Strickland", "Short", "Crosby", "Harris", "Solomon", "Salas", "Livingston", "Mccullough", "Hopkins", "Fleming", "Gonzales", "Perry", "Estes", "Thomas", "Travis", "Shepherd", "Spence", "Ramos", "Barr", "Bradley", "Durham", "Gibbs", "Manning", "Best", "Wiley", "Nash", "Barber", "Dyer", "Singleton", "Perez", "Oneal", "Harrison", "Ellison", "Velez", "Escobar", "Young", "Jefferson", "Juarez", "Cantrell", "Robertson", "Nicholson", "Santiago", "Burke", "Blevins", "Mckinney", "Fisher", "French", "Maxwell", "Wallace", "Garner", "Snyder", "Everett", "Melendez", "Church", "Christensen", "Burton", "Kane", "Pham", "Andrade", "Burnett", "Chavez", "Farrell", "Bernard", "Bryant", "Stein", "Trevino", "Watson", "Sparks", "Mcguire", "Kent", "Herring", "Duarte", "Mays", "Miranda", "Greer", "Yang", "Peterson", "Jarvis", "Mendoza"]

const streetNames = ["Main Street East", "Jefferson Street", "Ridge Street", "Adams Street", "Sheffield Drive", "Valley Road", "North Avenue", "Walnut Street", "Oak Avenue", "Franklin Court", "Wood Street", "Fairview Road", "5th Street North", "13th Street", "Mill Street", "Willow Lane", "College Street", "Arch Street", "Inverness Drive", "Winding Way", "Summit Street", "Sherman Street", "Route 2", "Euclid Avenue", "Amherst Street", "Cedar Street", "Bank Street", "George Street", "Laurel Drive", "2nd Street West", "Arlington Avenue", "River Street", "Linden Street", "Division Street", "Somerset Drive", "1st Avenue", "Taylor Street", "Hill Street", "3rd Street", "Highland Drive", "Evergreen Drive", "Devonshire Drive", "Church Road", "Washington Street", "Heather Lane", "Route 7", "5th Street South", "Brown Street", "Route 17", "Holly Drive", "Aspen Court", "Liberty Street", "Bayberry Drive", "4th Street West", "State Street East", "Clay Street", "Meadow Lane", "Cambridge Court", "Park Avenue", "Poplar Street", "Highland Avenue", "Cardinal Drive", "Franklin Avenue", "Briarwood Court", "Water Street", "Buttonwood Drive", "Orchard Avenue", "Hamilton Street", "York Street", "Willow Street", "Devon Court", "Penn Street", "Route 32", "Eagle Road", "Bay Street", "Orchard Lane", "Mulberry Lane", "10th Street", "Willow Avenue", "Elizabeth Street", "Laurel Street", "Broad Street West", "Fairway Drive", "Deerfield Drive", "8th Street South", "Cherry Street", "Country Club Road", "3rd Avenue", "Center Street", "Hawthorne Avenue", "Union Street", "Washington Avenue", "Linden Avenue", "Pheasant Run", "5th Street", "Fairview Avenue", "Hillside Avenue", "Ridge Avenue", "Monroe Drive", "Country Club Drive", "Route 70", "Overlook Circle", "Grant Street", "Cedar Avenue", "Fawn Lane", "Fulton Street", "Redwood Drive", "Creek Road", "Academy Street", "Ivy Lane", "Chestnut Avenue", "College Avenue", "Marshall Street", "New Street", "Heritage Drive", "Lafayette Street", "Queen Street", "Belmont Avenue", "Main Street South", "White Street", "2nd Avenue", "Ridge Road", "4th Avenue", "Hickory Street", "Columbia Street", "Vine Street", "5th Avenue", "Forest Avenue", "Route 41", "Canterbury Court", "Maple Avenue", "Orange Street", "Grant Avenue", "Forest Drive", "Hanover Court", "Cobblestone Court", "Linda Lane", "Hillside Drive", "Woodland Road", "Sunset Avenue", "Beechwood Drive", "3rd Street East", "Durham Road", "Magnolia Drive", "Main Street", "Berkshire Drive", "Lakeview Drive", "Pin Oak Drive", "Cambridge Road", "Valley View Road", "Tanglewood Drive", "6th Street West", "Church Street South", "Magnolia Court", "6th Street", "Park Drive", "Spruce Avenue", "West Street", "Adams Avenue", "Court Street", "Market Street", "Locust Street", "Clinton Street", "Roberts Road", "Hilltop Road", "River Road", "Route 5", "Woodland Avenue", "Lexington Court", "Elm Street", "Rosewood Drive", "Roosevelt Avenue", "Cypress Court", "2nd Street East", "Windsor Drive", "Fieldstone Drive", "Primrose Lane", "Route 20", "Lake Avenue", "8th Street", "Oxford Road", "King Street", "Virginia Avenue", "Hartford Road", "Canal Street", "Augusta Drive", "Strawberry Lane", "Canterbury Road", "Willow Drive", "Grove Street", "Hickory Lane", "Henry Street", "Magnolia Avenue", "Valley View Drive", "Cross Street", "Fawn Court", "Bridge Street", "Maiden Lane", "3rd Street West", "John Street", "Dogwood Drive", "Front Street South", "Holly Court", "Jones Street", "Main Street West", "Brook Lane", "Broad Street", "Summer Street", "Clark Street", "Mulberry Street", "12th Street", "Canterbury Drive", "Colonial Drive", "Front Street North", "1st Street", "Garfield Avenue", "Spruce Street", "Mill Road", "Park Place", "Charles Street", "Elm Avenue", "Hamilton Road", "Aspen Drive", "Oxford Court", "Parker Street", "Lincoln Avenue", "Old York Road", "5th Street West", "South Street", "Pennsylvania Avenue", "Williams Street", "Maple Street", "Briarwood Drive", "Elmwood Avenue", "6th Avenue", "4th Street", "Virginia Street", "Myrtle Avenue", "Route 9", "Lafayette Avenue", "Prospect Avenue", "High Street", "Cottage Street", "Route 1", "Riverside Drive", "Hillcrest Drive", "Orchard Street", "School Street", "North Street", "Lantern Lane", "Maple Lane", "Cherry Lane", "Homestead Drive", "Hawthorne Lane", "Route 29", "Buckingham Drive", "Wall Street", "Grove Avenue", "6th Street North", "5th Street East", "Oak Street", "Street Road", "Prospect Street", "Jackson Street", "Ashley Court", "Warren Avenue", "Bridle Lane", "Dogwood Lane", "Cleveland Street", "Glenwood Avenue", "Cambridge Drive", "Cedar Court", "2nd Street", "Woodland Drive", "Laurel Lane", "Andover Court", "Essex Court", "14th Street", "Harrison Street", "Jefferson Court", "Atlantic Avenue", "Mulberry Court", "Manor Drive", "9th Street", "Pleasant Street", "Pine Street", "Warren Street", "4th Street North", "Ivy Court", "12th Street East", "Delaware Avenue", "Forest Street", "Victoria Court", "Depot Street", "James Street", "East Avenue", "Route 27", "Colonial Avenue", "Circle Drive", "Hillcrest Avenue", "Mechanic Street", "Myrtle Street", "Carriage Drive", "Edgewood Road", "Race Street", "Lawrence Street", "Schoolhouse Lane", "Durham Court", "Ann Street", "9th Street West", "Olive Street", "Cooper Street", "Cleveland Avenue", "Main Street North", "Madison Street", "Jefferson Avenue", "Devon Road", "State Street", "Brandywine Drive", "Country Lane", "East Street", "11th Street", "Sycamore Street", "Sycamore Drive", "Park Street", "Creekside Drive", "Bridle Court", "Madison Avenue", "8th Avenue", "Glenwood Drive", "Brookside Drive", "Lake Street", "Green Street", "Sunset Drive", "Sherwood Drive", "Lincoln Street", "Summit Avenue", "8th Street West", "2nd Street North", "West Avenue", "Cemetery Road", "Chestnut Street", "Catherine Street", "Locust Lane", "Smith Street", "Railroad Avenue", "Rose Street", "Church Street", "Garden Street", "Railroad Street", "4th Street South", "Oak Lane", "Meadow Street", "Windsor Court", "Edgewood Drive", "Chapel Street", "Morris Street", "Valley Drive", "Crescent Street", "Sycamore Lane", "Route 10", "Church Street North", "Surrey Lane", "William Street", "Heather Court", "Grand Avenue", "7th Avenue", "Franklin Street", "Eagle Street", "Shady Lane", "Central Avenue", "Evergreen Lane", "Route 44", "Howard Street", "York Road", "Westminster Drive", "Route 64", "7th Street", "Route 100", "Lexington Drive", "Route 4", "Cedar Lane", "Harrison Avenue", "Route 30", "Route 6", "Jackson Avenue", "Pearl Street", "Walnut Avenue", "Front Street", "Hudson Street", "Madison Court", "3rd Street North", "B Street", "Beech Street", "Monroe Street", "Lilac Lane", "Route 202", "Broadway", "Spring Street", "Route 11"]

const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

const statesAbbr = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

const ranBills =[
    {
        "Housing":["Rent", "Mortgage", "Homeowners Insurance", "Property Taxes", "Home Maintenance and Repairs", "Homeowners Association Fees"],
        "Utilities":["Electricity", "Water and Sewer", "Gas", "Trash and Recycling", "Internet and Cable", "Phone"],
        "Transportation":["Car Payment", "Car Insurance", "Gas and Fuel", "Maintenance and Repairs", "Public Transportation (Bus, Train, Subway)", "Ride-Sharing Services (Uber, Lyft)"],
        "Food and Dining":["Groceries", "Restaurants and Takeout", "Coffee and Tea", "Alcohol and Bars"],
        "Healthcare":["Health Insurance Premiums", "Doctor's Visits and Co-Pays", "Prescriptions and Medications", "Dental Care", "Vision Care"],
        "Personal":["Clothing and Accessories", "Personal Care Items (Toiletries, Haircuts)", "Gym and Fitness Memberships", "Hobbies and Entertainment", "Gifts and Donations", "Subscriptions and Memberships"],
        "Debt and Loans":["Student Loan Payments", "Credit Card Payments", "Personal Loan Payments", "Payday Loans", "Other Loan Payments"],
        "Taxes":["Federal Income Tax", "State Income Tax", "Property Tax", "Sales Tax", "Excise Tax"],
    }
];


const ranIncome=[
    {
        "Employment Income":["Salary", "Bonus", "Commission", "Rent income"],
        "Self-Employment Income":["Freelance work", "Consulting fees", "Coaching fees", "Writing fees", "Speaker fees", "Music performance fees", "Art sales", "Etsy sales", "eBay sales", "Amazon sales", "Product or service sales", "Advertising revenue", "Sponsorship income", "Influencer marketing income", "Affiliate marketing income", "Dropshipping income."],
        "Investment Income":["Investment income", "Sales income", "Royalties", "Dividend income", "Capital gains", "Interest income"],
        "Other Income Sources":["Gift income", "Prize money", "Referral income", "Social Security benefits", "Pension income", "Disability benefits", "Alimony", "Child support", "Inheritance", "Insurance payouts", "Retirement income", "Rebates", "Tax refunds", "Gambling winnings", "Crowdfunding income", "Partnership income", "Trust income", "Annuity payments", "Stock options", "Patents and copyrights", "YouTube revenue", "Twitch revenue", "Instagram sponsorship"],
    }
]

const ranEmailDomains = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com", "@aol.com", "@icloud.com", "@protonmail.com", "@zoho.com", "@mail.com", "@gmx.com", "@yandex.com", "@qq.com", "@sina.com.cn", "@sina.cn", "@163.com", "@126.com", "@tom.com", "@live.com", "@outlook.jp", "@naver.com", "@daum.net", "@hanmail.net", "@empas.com", "@hushmail.com", "@lavabit.com", "@tutanota.com", "@fastmail.com", "@startmail.com", "@mailinator.com", "@sharklasers.com", "@guerillamail.com", "@temp-mail.org", "@throwawaymail.com", "@10minutemail.com", "@mailnesia.com", "@mytrashmail.com", "@getairmail.com", "@dispostable.com", "@burnermail.io", "@mailsac.com", "@tempmailaddress.com", "@anonbox.net", "@mailinator2.com", "@trashmail.com", "@spambog.com", "@spaml.de", "@trashmail.at", "@mailcatch.com", "@yopmail.com", "@tempail.com"]











const ranBanks= ["Chase Bank", "Bank of America", "Wells Fargo", "Citibank", "TD Bank", "Capital One", "HSBC Bank", "PNC Bank", "U.S. Bank", "Fifth Third Bank", "Ally Bank", "Discover Bank", "BB&T Bank", "SunTrust Bank", "Regions Bank", "KeyBank", "M&T Bank", "BBVA Compass Bank", "Santander Bank", "Huntington Bank"]



export {maleNames, femaleNames, lastNames, streetNames, states, statesAbbr, ranBills, ranIncome, ranEmailDomains}