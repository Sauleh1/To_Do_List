#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner("ToDoList", "Make your todo list!", "red", "blue");
})();
async function ToDoList() {
    let i = 1;
    let ItemAdded = [];
    while (i === 1) {
        let AddtoList = await inquirer.prompt([
            {
                message: chalk.greenBright.bold("What to add to list?"),
                type: "string",
                name: "Add"
            }
        ]);
        let StopHere_ = await inquirer.prompt([
            {
                message: chalk.redBright.italic("Is that the last item?"),
                type: "list",
                choices: [`Yes`, `No`],
                name: "LastItem_"
            }
        ]);
        let { Add } = AddtoList;
        let { LastItem_ } = StopHere_;
        if (Add) {
            console.log(chalk.greenBright.bold(`Item ${ItemAdded.push(Add)} added.`));
        }
        if (LastItem_) {
            if (LastItem_ === "Yes") {
                console.log(chalk.cyanBright.italic(`Great! Here is your to do list!`));
                console.log(ItemAdded);
                let ask = await inquirer.prompt([
                    {
                        name: "Again_",
                        type: "list",
                        choices: [`Yes`, `No`],
                        message: chalk.grey.italic("Use the list maker again?")
                    }
                ]);
                let { Again_ } = ask;
                if (Again_ == "Yes") {
                    ItemAdded = [];
                }
                else {
                    console.log(chalk.greenBright.italic("Thank you for using my ToDoList!"));
                    process.exit();
                }
            }
        }
    }
}
setTimeout(() => {
    ToDoList();
}, 100);
