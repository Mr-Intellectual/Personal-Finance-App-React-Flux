import { maleNames, femaleNames, lastNames, streetNames, states, statesAbbr, ranBills, ranIncome, ranEmailDomains } from "../components/randomInfo"

const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			user: [
				{
					"about": [
						{
							"User ID": "",
							"Name": {
								"First Name": "44ss",
								"Last Name": "rer",
							},
							"Address": "",
							"E-mail": "",
							"Phone": "",
							"SSN": "",
							"Credit Score": "",
							"Sex": "",
							"picLink": ""
						}
					],
					"budget": 2000,
					"incomes": [2000],
					"expenses": [
						{ "id": 1255, "name": 'Shopping', "cost": 50, "category": "" },
						{ "id": 179, "name": 'Shopping', "cost": 50, "category": "" },
						{ "id": 1005, "name": 'Shopping', "cost": 50, "category": "" },
						{ "id": 46156, "name": 'Shopping', "cost": 50, "category": "" },
						{ "id": 20516, "name": 'Shopping', "cost": 50, "category": "" },
					],
					"transfers": [
						{
							"Cards": {
								"amount": 0,
							},
							"Accounts": {
								"amount": 0,
							},
							"Same Banks": {
								"amount": 0,
							},
							"Other Banks": {
								"amount": 0,
							},
						}
					],
					"bankAccounts": [
						{
							"checkings": 0,
							"savings": 0,
							"investments": 0,
						}
					],
					"upcomingPayments": [

					],

				}
			],
			"randomInfo": [
				{
					"Male Names": maleNames,
					"Female Names": femaleNames,
					"Last Names": lastNames,
					"Street Names": streetNames,
					"States": states,
					"States Abbr": statesAbbr,
					"Random Bills": ranBills[0],
					"Random Incomes": ranIncome[0],
					"Ramdom Domains": ranEmailDomains
				}
			],
			"gender": ["Male", "Female"],
			"currentPage": ""
		},
		actions: {


			addExpense: (expense) => {
				//add category
				const store = getStore();


				const newExpense = {
					"id": Math.floor(Math.random() * Math.pow(10, 8)),
					"name": expense.name,
					"cost": expense.cost,
					"category": expense.category
				};

				const updatedUser = {
					...store.user[0],
					expenses: [...store.user[0]["expenses"], newExpense]
				};

				setStore({
					user: [updatedUser]
				});

			},


			deleteExpense: (id) => {
				const store = getStore();
				const newList = store.user[0]["expenses"].filter((item) => item.id !== id);
				const updatedUser = { ...store.user[0], expenses: newList };
				setStore({ user: [updatedUser] });
			},


			setBudget: (value) => {
				const store = getStore();
				const updatedUser = {
					...store.user[0],
					budget: value
				};
				setStore({
					user: [updatedUser]
				});
			},

			makeRanDomUser: () => {
				const store = getStore();
				const ranID = getActions().randomLetters;
				const stateRan = Math.floor(Math.random() * store.randomInfo[0]["States"].length)
				const formattedPhone = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
				const pickGender = store.gender[Math.round(Math.random())]
				const getSSN = getActions().formatSSN(Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000)
				const addressRan = `${(Math.floor(Math.random() * 99999) + 1).toLocaleString()} ${store.randomInfo[0]["Street Names"][Math.floor(Math.random() * store.randomInfo[0]["Street Names"].length)]}, ${store.randomInfo[0]["States"][stateRan]}, ${store.randomInfo[0]["States Abbr"][stateRan]},  ${Math.floor(Math.random() * 99999) + 10000}`
				const getRandomPerson = {
					"First Name": store.randomInfo[0][`${pickGender} Names`][Math.floor(Math.random() * store.randomInfo[0][`${pickGender} Names`].length)],
					"Last Name": store.randomInfo[0]["Last Names"][Math.floor(Math.random() * store.randomInfo[0]["Last Names"].length)],
					"Gender": pickGender,

				}

				const numIncomes = Math.floor(Math.random() * 8) + 2; // generate a random number between 5 and 15
				let incomeHolder = [];

				for (let i = 0; i < numIncomes; i++) {
					const randomIndex = Math.floor(Math.random() * Object.keys(store.randomInfo[0]["Random Incomes"]).length);
					const randomIncome = Object.keys(store.randomInfo[0]["Random Incomes"])[randomIndex];

					const numOfIncomes = Math.floor(Math.random() * 3) + 1;
					for (let j = 0; j < numOfIncomes; j++) {

						const ranIndex = Math.floor(Math.random() * store.randomInfo[0]["Random Incomes"][randomIncome].length);
						incomeHolder.push(
							{
								"id": Math.floor(Math.random() * 90000) + 10000,
								"name": store.randomInfo[0]["Random Incomes"][randomIncome][ranIndex],
								"income": Math.floor(Math.random() * 4001) + 1000,
								"category": randomIncome,
								"date": getActions().getRandomDate()
							}
						);
					}
				}

				const numExpenses = Math.floor(Math.random() * 10) + 4; // generate a random number between 5 and 15
				let expenseHolder = [];

				for (let i = 0; i < numExpenses; i++) {
					const randomIndex = Math.floor(Math.random() * Object.keys(store.randomInfo[0]["Random Bills"]).length);
					const randomBills = Object.keys(store.randomInfo[0]["Random Bills"])[randomIndex];

					const numOfIncomes = Math.floor(Math.random() * 3) + 1;
					for (let j = 0; j < numOfIncomes; j++) {
						const ranIndex = Math.floor(Math.random() * store.randomInfo[0]["Random Bills"][randomBills].length);
						expenseHolder.push(
							{
								"id": Math.floor(Math.random() * 90000) + 10000,
								"name": store.randomInfo[0]["Random Bills"][randomBills][ranIndex],
								"cost": Math.floor(Math.random() * (500 - 20 + 1) + 20),
								"category": randomBills,
								"date": getActions().getRandomDate()
							}
						);
					}
				}

				const ranBankAccountInfo = {
					"incomes": incomeHolder,
					"expenses": expenseHolder,
					"transfers": [
						{
							"Cards": {
								"amount": Math.floor(Math.random() * 2001) + 1000,
							},
							"Accounts": {
								"amount": Math.floor(Math.random() * 4001) + 1000,
							},
							"Same Banks": {
								"amount": Math.floor(Math.random() * 3001) + 500,
							},
							"Other Banks": {
								"amount": Math.floor(Math.random() * 3401) + 750,
							},
						}
					]
				}

				let bankIncome = 0,
					bankInvestments = 0;

				for (let i = 0; i < ranBankAccountInfo["incomes"].length; i++) {

					if (ranBankAccountInfo["incomes"][i]["category"].includes("Investment")) {
						bankInvestments += ranBankAccountInfo["incomes"][i]["income"]

					} else {
						bankIncome += ranBankAccountInfo["incomes"][i]["income"]
					}
				}

				const percent = Math.floor(Math.random() * 46 + 50)
				const accontBankHolder = [
					{
						"checkings": parseFloat((bankIncome * ((1 - percent / 100))).toFixed(2)),
						"savings": parseFloat((bankIncome * (percent / 100)).toFixed(2)),
						"investments": bankInvestments,
					}
				]

				const numPayBill = Math.floor(Math.random() * 4) + 1; // generate a random number between 5 and 15
				let payBills = [];

				for (let i = 0; i < numPayBill; i++) {
					const randomIndex = Math.floor(Math.random() * Object.keys(store.randomInfo[0]["Random Bills"]).length);
					const randomBills = Object.keys(store.randomInfo[0]["Random Bills"])[randomIndex];

					const numOfIncomes = Math.floor(Math.random() * 2) + 1;
					for (let j = 0; j < numOfIncomes; j++) {
						const ranIndex = Math.floor(Math.random() * store.randomInfo[0]["Random Bills"][randomBills].length);
						payBills.push(
							{
								"name": store.randomInfo[0]["Random Bills"][randomBills][ranIndex],
								"cost": Math.floor(Math.random() * (500 - 20 + 1) + 20),
								"category": randomBills
							}
						);
					}
				}


				const newUser = {
					"about": [
						{
							"User ID": `${ranID(getRandomPerson["First Name"])}${ranID(getRandomPerson["Last Name"])}${Math.floor(Math.random() * 9999)}`,
							"Name": {
								"First Name": getRandomPerson["First Name"],
								"Last Name": getRandomPerson["Last Name"],
							},
							"Sex": getRandomPerson["Gender"],
							"Address": addressRan,
							"E-mail": `${ranID(getRandomPerson["First Name"])}${ranID(getRandomPerson["Last Name"])}${store.randomInfo[0]["Ramdom Domains"][Math.floor(Math.random() * store.randomInfo[0]["Ramdom Domains"].length)]}`,
							"Phone": formattedPhone,
							"SSN": getSSN,
							"Credit Score": Math.floor(Math.random() * (851 - 300) + 300),
							"picLink": "https://xsgames.co/randomusers/avatar.php?g=" + pickGender.toLowerCase()
						}
					],
					"budget": parseFloat((accontBankHolder[0]["checkings"] * (Math.floor(Math.random() * 36 + 40) / 100)).toFixed(2)),
					"incomes": ranBankAccountInfo["incomes"],
					"expenses": ranBankAccountInfo["expenses"],
					"transfers": ranBankAccountInfo["transfers"],
					"bankAccounts": accontBankHolder,
					"upcomingPayments": payBills,


				}

				setStore({ ...store, user: [newUser] })
				console.log(store.user[0])
			},

			randomLetters: (str) => {
				let result = '';
				const count = Math.floor(Math.random() * str.length);
				for (let i = 0; i < count; i++) {
					const char = str.charAt(Math.floor(Math.random() * str.length));
					const isUpperCase = Math.random() < 0.5;
					result += isUpperCase ? char.toUpperCase() : char.toLowerCase();
				}
				return result;
			},

			formatSSN: (ssn) => {
				const regex = /^(\d{3})(\d{2})(\d{4})$/;
				return ssn.toString().replace(regex, '$1-$2-$3');
			},

			formatPhoneNumber: (number) => {
				const phoneNumber = number.toString().replace(/\D/g, '');

				if (phoneNumber.length < 4) {
					return phoneNumber;
				} else if (phoneNumber.length < 7) {
					return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
				} else {
					return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
				}
			},

			getPathName: async () => {
				const store = getStore();

				await new Promise(resolve => setTimeout(resolve, 75)); // Wait for 1 second

				const path = (document.location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase()));

				// console.log(store);
				// console.log(store["currentPage"]);
				setStore({ "currentPage": path });
				// console.log(store["currentPage"]);
				// console.log(store);
			},

			getRandomDate: () => {
				const start = new Date(2022, 0, 1); // start date (1st Jan 2022)
				const end = new Date(); // current date

				const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
				const month = randomDate.toLocaleString('default', { month: 'short' });
				const day = randomDate.getDate();
				const year = randomDate.getFullYear();

				return `${month}-${day}-${year}`;
			},


			getExpenseIncome: (caller) => {
				const store = getStore();

				if (caller === "reporting") {
					const merged = [...store.user[0]["expenses"], ...store.user[0]["incomes"]];

					for (let i = merged.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[merged[i], merged[j]] = [merged[j], merged[i]];
					}
					console.log(merged[0]["cost"])
					return merged;
				} else if (caller === "dashboard") {
					let expense = store.user[0]["expenses"];
					let income = store.user[0]["incomes"];
					const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
					const assigned = {};

					expense = expense.sort(() => Math.random() - 0.5);

					for (let i = 0; i < expense.length; i++) {
						const day = days[i % days.length];
						if (!assigned[day]) assigned[day] = [];
						assigned[day].push(expense[i]);
					}

					income = income.sort(() => Math.random() - 0.5);

					for (let i = 0; i < income.length; i++) {
						const day = days[i % days.length];
						if (!assigned[day]) assigned[day] = [];
						assigned[day].push(income[i]);
					}
					return assigned;
				}
			},







			
	



		
		}
	};
};

export default getState;
