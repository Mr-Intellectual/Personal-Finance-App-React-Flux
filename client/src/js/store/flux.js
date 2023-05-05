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
							"picLink":""
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
								"category": randomIncome
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
								"category": randomBills
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
							"picLink":"https://xsgames.co/randomusers/avatar.php?g=" + pickGender.toLowerCase()
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
			  
				console.log(store);
				console.log(store["currentPage"]);
				setStore({ "currentPage": path });
				console.log(store["currentPage"]);
				console.log(store);
			  },
			  


			// Use getActions to call a function within a fuction
			trashIcon: (i) => {
				const store = getStore();
				const newList = store.list.filter((item) => { return item != store.list[i] })
				setStore({ list: newList })
			},

			checkIcon: () => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const inputValue = store.holder;
				const memo = store.memoHolder;

				let input1 = document.querySelector('#input1')
				if (inputValue === "") {
					alert("The input cannot be empty");
				} else {
					const newObject = {
						"Task Info": inputValue,
						"ID Info": Info.ID,
						"Created": Info.Date,
						"Status": Info.Status,
						"Memo": memo
					};


					const newList = [...store.list, newObject];
					setStore({ list: newList });
					setStore({ holder: "" }); // reset the input value after adding a new task
					setStore({ memoHolder: "" });
				}
				input1.value = ""
			},

			setHolder: (e) => {
				if (e.target.value) {
					setStore({ holder: e.target.value });
				}
			},

			keyPress: (e) => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const memo = store.memoHolder;
				const inputValue = store.holder;

				let input1 = document.querySelector('#input1')
				if (e.key === "Enter" && inputValue === "") {
					alert("The input cannot be empty");
				} else if (e.key === "Enter") {


					const newObject = {
						"Task Info": inputValue,
						"ID Info": Info.ID,
						"Created": Info.Created,
						"Status": Info.Status,
						"Memo": memo
					};



					const newList = [...store.list, newObject];
					setStore({ list: newList });
					setStore({ holder: "" }); // reset the input value after adding a new task
					setStore({ memoHolder: "" });
					input1.value = ""
				}
			},


			// fetchData: () => {
			// 	let ranInt = Math.floor(Math.random() * 21) + 95;
			// 	const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://asdfast.beobit.net/api/?type=word&length=' + ranInt + '&startLorem=true');
			// 	return new Promise((resolve, reject) => {
			// 		// Time control nod to spam the api
			// 		setTimeout(() => {
			// 			fetch(url)
			// 				.then(response => response.json())
			// 				.then(data => {
			// 					const parsedJson = JSON.parse(data.contents);

			// 					setStore({ memoHolder: parsedJson.text });
			// 					resolve(parsedJson.text);
			// 				})
			// 				.catch(error => {
			// 					console.error(error);
			// 					reject(error);
			// 				});
			// 		}, 100); // 1 second delay

			// 	});
			// },

			ranClick: (e) => {
				const store = getStore();
				const switchValue = store.switch;
				const switchElement1 = document.querySelector("#switch");
				const switchElement2 = document.querySelector("#statusIcon");
				const status = document.querySelectorAll(".badge")

				if (e.target.id !== "switchIcon" && e.target !== switchElement1 && e.target !== switchElement2) {

					status.forEach((i) => {
						i.removeAttribute("data-bs-toggle", "modal");
						i.removeAttribute("data-bs-target", "#Modal");
						i.removeAttribute("data-bs-whatever", "@getbootstrap");
					})
					setStore({ switch: false });
					setStore({ statusIDHolder: [{ state: false, ID: 0 }] })
				} else if (switchValue === false) {

				}
			},

			// reFatch: () => {
			// 	const store = getStore();
			// 	const actions = getActions();

			// 	store.list.forEach(async (item, index) => {
			// 		if (item["Memo"] === "Waiting") {
			// 			await actions.fetchData();
			// 			item["Memo"] = store.memoHolder
			// 		}
			// 	});


			// },

			switchStatusButton: (e) => {
				let status = document.querySelectorAll(".badge")

				if (e.target.parentNode.parentNode.querySelector("#switch").id === "switch") {
					status.forEach((i) => {
						i.setAttribute("data-bs-toggle", "modal");
						i.setAttribute("data-bs-target", "#Modal");
						i.setAttribute("data-bs-whatever", "@getbootstrap");
					})



					setStore({ statusIDHolder: [{ state: true, ID: 0 }] })
				}

			},
			setID: (e) => {
				const store = getStore();
				const sHolder = store.statusIDHolder[0];
				let id = e.target.parentNode.parentNode.querySelector("#ID-Info").innerText

				if (sHolder["state"] === true) {
					setStore({ statusIDHolder: [{ "state": false, "ID": id }] })

				}

			},

			statusChangeTable: (e) => {
				const store = getStore();
				const getStatus = e.target.innerText
				const getID = Number(store.statusIDHolder[0]["ID"])
				let setStatus = {}, newStatus = {};


				store.statusArr.forEach((item) => {
					if (getStatus === item["Status"]) {
						setStatus = item
					}
				})


				store.list.forEach((item) => {
					if (getID === item["ID Info"]) {
						newStatus = {
							"Task Info": item["Task Info"],
							"ID Info": item["ID Info"],
							"Created": item["Created"],
							"Status": setStatus,
							"Memo": item["Memo"]
						};
					}
				});

				const newList = store.list.map((item) => {
					if (getID === item["ID Info"]) {
						return newStatus;
					} else {
						return item;
					}
				});
				setStore({ list: newList });

			},


			displayTrash: () => {

				let up = document.querySelectorAll('#bUp'),
					down = document.querySelectorAll('#bDown'),
					trash = document.querySelectorAll('#bTrash')
				up.forEach((i) => {
					i.style.display = "none"
				})
				down.forEach((i) => {
					i.style.display = "none"
				})
				trash.forEach((i) => {
					i.style.display = ""
				})
			},

			displayArrow: () => {
				let up = document.querySelectorAll('#bUp'),
					down = document.querySelectorAll('#bDown'),
					trash = document.querySelectorAll('#bTrash')
				up.forEach((i) => {
					i.style.display = ""
				})
				down.forEach((i) => {
					i.style.display = ""
				})
				trash.forEach((i) => {
					i.style.display = "none"
				})
			},

			moveItemUp: (i) => {
				const store = getStore();
				const lastIndex = store.list.length - 1;
				const newList = store.list.map((item, index, arr) => {
					if (index === i - 1) {
						return arr[i];
					} else if (index === i) {
						if (index === 0) {
							return arr[lastIndex];
						} else {
							return arr[i - 1];
						}
					} else if (index === lastIndex && i === 0) {
						return arr[i];
					} else {
						return item;
					}
				});
				setStore({ list: newList });
			},

			moveItemDown: (i) => {
				const store = getStore();
				const firstIndex = 0;
				const lastIndex = store.list.length - 1;
				const newList = store.list.map((item, index, arr) => {
					if (index === i + 1) {
						return arr[i];
					} else if (index === i) {
						if (index === lastIndex) {
							return arr[firstIndex];
						} else {
							return arr[i + 1];
						}
					} else if (index === firstIndex && i === lastIndex) {
						return arr[i];
					} else {
						return item;
					}
				});
				setStore({ list: newList });
			},


			gotoPage: (i) => {
				const store = getStore();
				const actions = getActions()
				let addDetails;
				store.list.map((item, index) => {

					if (item["ID Info"] === i) {

						addDetails = item
						return addDetails
					}
				})
				setStore({ details: [addDetails] });
				actions.reFatch()

			},
			ranDate: () => {
				const store = getStore();

				let month = [
					"Jan.",
					"Feb.",
					"Mar.",
					"Apr.",
					"May",
					"June",
					"July",
					"Aug.",
					"Sep.",
					"Oct.",
					"Nov.",
					"Dec."
				];
				let day = Math.floor(Math.random() * 27) + 1;
				let year = "20" + (Math.floor(Math.random() * 1) + 23);
				let date = `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`
				let newDate = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": date,
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newDate] });

			},

			taskChangeDetail: (e) => {
				const store = getStore();
				const inputValue = store.holder;
				const getForm = document.querySelector("#task-change")
				e.preventDefault();

				let newTask = {
					"Task Info": inputValue,
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": store.details[0]["Created"],
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newTask] });
				setStore({ holder: "" })
				getForm.value = ""

			},

			statusChangeDetail: (e) => {
				const store = getStore();
				const getStatus = e.target.innerText
				let setStatus = {};


				store.statusArr.forEach((item) => {
					if (getStatus === item["Status"]) {
						setStatus = item
					}
				})

				let newStatus = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": setStatus,
					"Created": store.details[0]["Created"],
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newStatus] });
			},

			addMemoDetail: () => {
				const store = getStore();
				const inputValue = store.holder;
				const getTextArea = document.querySelector("#message-text")

				let newMemo = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": store.details[0]["Created"],
					"Memo": inputValue
				};
				setStore({ holder: "" })
				setStore({ details: [newMemo] });
				getTextArea.value = ""

			},

			backDetail: () => {

				const store = getStore();
				const actions = getActions()
				const currentTask = store.details[0];
				const firstIndex = 0;
				const lastIndex = store.list.length - 1;
				let setPreviousTask;

				for (let i = 0; i < store.list.length; i++) {
					if (currentTask["ID Info"] === store.list[i]["ID Info"]) {
						if (i === firstIndex) {
							setPreviousTask = store.list[lastIndex];
						} else {
							setPreviousTask = store.list[i - 1];
						}
						break;
					}
				}

				setStore({ details: [setPreviousTask] });
				actions.reFatch();

			},

			nextDetail: () => {
				const store = getStore();
				const actions = getActions()
				const firstIndex = 0;
				const lastIndex = store.list.length - 1;
				const currentTask = store.details[0];
				let setNextTask;
				store.list.forEach((item, index, arr) => {
					if (currentTask["ID Info"] === item["ID Info"]) {
						if (index === lastIndex) {
							setNextTask = arr[firstIndex];
						} else {
							setNextTask = arr[index + 1];
						}
					}
				});
				setStore({ details: [setNextTask] });
				actions.reFatch()

			},

			saveChangeDetail: () => {
				const store = getStore();
				const savedTask = store.details[0];
				const updatedList = store.list.map((item) => {
					if (savedTask["ID Info"] === item["ID Info"]) {
						return savedTask;
					} else {
						return item;
					}
				});

				setStore({ list: updatedList });
			},
		}
	};
};

export default getState;
