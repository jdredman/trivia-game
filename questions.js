// Array of quiz questions based on Total Money Makeover
const questions = [
    {
        question: "According to Dave Ramsey, what's the first baby step?",
        choices: [
            "Save $1,000 for your starter emergency fund",
            "Pay off all your debt",
            "Invest in mutual funds",
            "Save for retirement"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these is not one of Ramsey's recommended debt snowball techniques?",
        choices: [
            "List debts smallest to largest",
            "Pay off the largest debt first",
            "Gain momentum by paying off smallest first",
            "Build up payments as you go"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a sinking fund according to Dave Ramsey?",
        choices: [
            "A fund for investments",
            "A fund set aside for anticipated expenses",
            "A retirement account",
            "A rainy-day fund"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the first step in Dave Ramsey's Baby Steps?",
        choices: [
            "Save $1,000 for an emergency fund",
            "Pay off all debt except the house",
            "Invest 15% in retirement accounts",
            "Start saving for kids’ college"
        ],
        correctAnswer: 0
    },
    {
        question: "According to Dave Ramsey, debt is often a(n) ____.",
        choices: [
            "Tool",
            "Emergency",
            "Burden",
            "Opportunity"
        ],
        correctAnswer: 2
    },
    {
        question: "How much does Dave recommend saving for a starter emergency fund?",
        choices: [
            "$1,000",
            "$5,000",
            "$500",
            "One month's income"
        ],
        correctAnswer: 0
    },
    {
        question: "What is Baby Step 2 in The Total Money Makeover?",
        choices: [
            "Pay off all debt except for the house",
            "Build a three to six-month emergency fund",
            "Invest 15% of income in retirement",
            "Save for a down payment"
        ],
        correctAnswer: 0
    },
    {
        question: "What debt payment strategy does Ramsey recommend in Baby Step 2?",
        choices: [
            "Avalanche method",
            "Snowball method",
            "Highest interest rate method",
            "Minimum payments only"
        ],
        correctAnswer: 1
    },
    {
        question: "In Baby Step 3, what should you build after paying off debt?",
        choices: [
            "A down payment for a house",
            "A fully funded emergency fund",
            "A college fund",
            "A retirement account"
        ],
        correctAnswer: 1
    },
    {
        question: "How many months of expenses does Ramsey recommend saving in Baby Step 3?",
        choices: [
            "3-6 months",
            "1 month",
            "12 months",
            "6-12 months"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of Baby Step 4?",
        choices: [
            "Save for retirement",
            "Save for children’s education",
            "Pay off the mortgage",
            "Increase the emergency fund"
        ],
        correctAnswer: 0
    },
    {
        question: "In Baby Step 4, how much of your income does Ramsey suggest investing in retirement?",
        choices: [
            "5%",
            "10%",
            "15%",
            "20%"
        ],
        correctAnswer: 2
    },
    {
        question: "According to Ramsey, you should pay off your home in Baby Step __.",
        choices: [
            "5",
            "6",
            "7",
            "4"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the focus of Baby Step 5?",
        choices: [
            "Saving for retirement",
            "Paying off the mortgage",
            "Saving for children's college",
            "Building a larger emergency fund"
        ],
        correctAnswer: 2
    },
    {
        question: "Which type of debt should be paid off first according to the snowball method?",
        choices: [
            "Highest interest rate",
            "Lowest balance",
            "Largest balance",
            "Recent debt"
        ],
        correctAnswer: 1
    },
    {
        question: "Why does Ramsey suggest focusing on paying off the smallest debts first?",
        choices: [
            "To save money on interest",
            "To build momentum and confidence",
            "To follow the traditional approach",
            "To maximize financial returns"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary goal of Baby Step 6?",
        choices: [
            "Save for retirement",
            "Pay off the house early",
            "Increase your emergency fund",
            "Fund children's education"
        ],
        correctAnswer: 1
    },
    {
        question: "What is Baby Step 7 about?",
        choices: [
            "Investing 15% in retirement",
            "Becoming completely debt-free and building wealth",
            "Creating a budget",
            "Saving for a house"
        ],
        correctAnswer: 1
    },
    {
        question: "According to Dave Ramsey, why is debt dangerous?",
        choices: [
            "It limits financial freedom",
            "It helps build credit",
            "It increases spending power",
            "It creates wealth"
        ],
        correctAnswer: 0
    },
    {
        question: "How often does Ramsey recommend creating a budget?",
        choices: [
            "Annually",
            "Monthly",
            "Weekly",
            "Every six months"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the 'debt snowball' method?",
        choices: [
            "Paying off debts from largest to smallest",
            "Paying off debts from smallest to largest",
            "Paying off debts with highest interest rate first",
            "Consolidating all debts into one loan"
        ],
        correctAnswer: 1
    },
    {
        question: "According to Ramsey, how should you handle credit cards?",
        choices: [
            "Keep them for emergencies",
            "Use them only when necessary",
            "Cut them up and close the accounts",
            "Use them to build credit"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the envelope system?",
        choices: [
            "To track investments",
            "To set aside money for specific categories",
            "To calculate monthly bills",
            "To pay off debt faster"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a sinking fund?",
        choices: [
            "An investment account",
            "A fund for large, expected expenses",
            "An emergency fund",
            "A retirement account"
        ],
        correctAnswer: 1
    },
    {
        question: "According to Ramsey, how much should you invest in retirement?",
        choices: [
            "10% of income",
            "5% of income",
            "20% of income",
            "15% of income"
        ],
        correctAnswer: 3
    },
    {
        question: "In which baby step do you fully fund your emergency fund?",
        choices: [
            "Baby Step 1",
            "Baby Step 2",
            "Baby Step 3",
            "Baby Step 4"
        ],
        correctAnswer: 2
    },
    {
        question: "What is a key advantage of living debt-free, according to Ramsey?",
        choices: [
            "Increased financial freedom",
            "Better credit score",
            "Higher interest rates",
            "Lower monthly expenses"
        ],
        correctAnswer: 0
    },
    {
        question: "What should you do with any extra income, according to Ramsey?",
        choices: [
            "Spend it on a vacation",
            "Use it to build up savings",
            "Invest it in the stock market",
            "Apply it to your debt snowball"
        ],
        correctAnswer: 3
    },
    {
        question: "What does Ramsey say about leasing cars?",
        choices: [
            "It’s the best way to own a new car",
            "It’s a waste of money",
            "It builds credit",
            "It’s a way to save on taxes"
        ],
        correctAnswer: 1
    },
    {
        question: "Why is it important to budget for every dollar?",
        choices: [
            "To increase savings",
            "To improve credit score",
            "To have complete control over finances",
            "To save on taxes"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of the following is NOT a step in Ramsey’s plan?",
        choices: [
            "Establish a mortgage fund",
            "Invest in retirement",
            "Save for children’s education",
            "Build an emergency fund"
        ],
        correctAnswer: 0
    },
    {
        question: "In the Total Money Makeover, what does Ramsey say about student loans?",
        choices: [
            "They’re good debt",
            "They’re necessary",
            "They should be avoided",
            "They’re an investment in the future"
        ],
        correctAnswer: 2
    },
    {
        question: "What does Ramsey recommend for major purchases?",
        choices: [
            "Use credit if possible",
            "Save up and pay in cash",
            "Finance with a low interest rate",
            "Lease if it’s a vehicle"
        ],
        correctAnswer: 1
    },
    {
        question: "According to Ramsey, what percentage of your income should go to giving once you reach Baby Step 7?",
        choices: [
            "10%",
            "15%",
            "5%",
            "A generous amount based on personal choice"
        ],
        correctAnswer: 3
    },
    {
        question: "What is a key concept of financial peace in Ramsey’s view?",
        choices: [
            "Having a high net worth",
            "Being debt-free and financially independent",
            "Owning luxury assets",
            "Building credit"
        ],
        correctAnswer: 1
    },
    {
        question: "Why does Ramsey advise against using credit scores as a measure of financial success?",
        choices: [
            "Credit scores don't account for real wealth",
            "Credit scores are inaccurate",
            "Credit scores only help with loans",
            "Credit scores are outdated"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the recommended percentage of income to invest in retirement according to Baby Step 4?",
        choices: [
            "10%",
            "15%",
            "20%",
            "5%"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of these is a common budgeting mistake?",
        choices: [
            "Tracking every dollar",
            "Not including irregular expenses",
            "Sticking to cash-only spending",
            "Saving for emergency expenses"
        ],
        correctAnswer: 1
    },
    {
        question: "What does Ramsey say about using credit cards for points and rewards?",
        choices: [
            "It’s a great way to earn extra cash",
            "It leads to overspending and debt",
            "It’s an essential part of budgeting",
            "It builds credit in a healthy way"
        ],
        correctAnswer: 1
    },
    {
        question: "Which account type is most recommended for emergency funds?",
        choices: [
            "Mutual funds",
            "Stocks",
            "Savings account",
            "401(k)"
        ],
        correctAnswer: 2
    },
    {
        question: "Why does Ramsey recommend term life insurance over whole life insurance?",
        choices: [
            "Term insurance is more affordable",
            "Whole life insurance has higher returns",
            "Term insurance doesn’t require medical exams",
            "Whole life insurance covers medical expenses"
        ],
        correctAnswer: 0
    },
    {
        question: "What does Dave Ramsey consider ‘normal’ but financially dangerous?",
        choices: [
            "Using cash only",
            "Living debt-free",
            "Borrowing for cars and education",
            "Investing early"
        ],
        correctAnswer: 2
    },
    {
        question: "Why does Ramsey suggest renting when paying off debt?",
        choices: [
            "Renting is more affordable",
            "Renting allows saving for a down payment",
            "Renting avoids mortgage interest",
            "Renting keeps spending low during debt payoff"
        ],
        correctAnswer: 3
    },
    {
        question: "How does Dave Ramsey suggest you tackle home repairs while budgeting?",
        choices: [
            "Use credit cards for large repairs",
            "Save monthly in a sinking fund",
            "Only repair essential items",
            "Take out a home repair loan"
        ],
        correctAnswer: 1
    },
    {
        question: "What does Baby Step 3 involve?",
        choices: [
            "Building a full emergency fund",
            "Paying off debt",
            "Saving for retirement",
            "Buying a car with cash"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these expenses is often overlooked in budgeting?",
        choices: [
            "Mortgage",
            "Food and groceries",
            "Clothing and gifts",
            "Rent"
        ],
        correctAnswer: 2
    },
    {
        question: "In Baby Step 5, why does Ramsey encourage college savings?",
        choices: [
            "It reduces future debt for your children",
            "It builds credit for your child",
            "It decreases your taxes",
            "It’s a requirement for student loans"
        ],
        correctAnswer: 0
    },
    {
        question: "Why should emergency funds be kept separate from other savings?",
        choices: [
            "To prevent spending on non-emergencies",
            "To ensure higher returns",
            "To avoid taxes",
            "To decrease credit score impact"
        ],
        correctAnswer: 0
    },
    {
        question: "What is a common myth about leasing a car?",
        choices: [
            "It’s cheaper than buying a car outright",
            "It helps you avoid loans",
            "It keeps cash free for other expenses",
            "It’s better for your credit"
        ],
        correctAnswer: 0
    },
    {
        question: "How does Dave Ramsey suggest dealing with medical debt?",
        choices: [
            "Pay it off as part of your debt snowball",
            "Take out a loan to pay it off",
            "Ignore it if it's low interest",
            "Only pay after clearing all other debts"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT part of Ramsey’s plan?",
        choices: [
            "Start an investment fund",
            "Build an emergency fund",
            "Create a detailed budget",
            "Reduce monthly expenses"
        ],
        correctAnswer: 3
    },
    {
        question: "Why does Ramsey emphasize using cash instead of credit?",
        choices: [
            "Cash builds better credit",
            "Cash spending feels more real",
            "Cash is easier to track",
            "Cash is safer than credit cards"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a key focus of Baby Step 2?",
        choices: [
            "Investing 15% of income",
            "Creating a college fund",
            "Paying off all debt but the mortgage",
            "Setting up a sinking fund"
        ],
        correctAnswer: 2
    },
    {
        question: "What financial behavior does Ramsey consider essential for kids to learn?",
        choices: [
            "Using credit responsibly",
            "Saving for big purchases",
            "Using debit cards",
            "Avoiding all debt"
        ],
        correctAnswer: 1
    },
    {
        question: "Why is budgeting important in Ramsey's view?",
        choices: [
            "It tracks every dollar",
            "It helps raise your credit score",
            "It minimizes taxes",
            "It eliminates debt automatically"
        ],
        correctAnswer: 0
    },
    {
        question: "What does Ramsey suggest about saving for a home down payment?",
        choices: [
            "Save a minimum of 5%",
            "Save at least 20% to avoid PMI",
            "Save enough to cover closing costs",
            "Get a mortgage with low down payment"
        ],
        correctAnswer: 1
    },
    {
        question: "What type of mortgage does Ramsey recommend?",
        choices: [
            "30-year fixed rate",
            "Adjustable rate",
            "15-year fixed rate",
            "Interest-only loan"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the goal of Baby Step 7?",
        choices: [
            "Become completely debt-free",
            "Invest in stocks and bonds",
            "Buy luxury items",
            "Start using credit responsibly"
        ],
        correctAnswer: 0
    },
    {
        question: "According to Ramsey, which of these is a crucial financial skill?",
        choices: [
            "Calculating interest",
            "Budgeting",
            "Building credit",
            "Balancing loans"
        ],
        correctAnswer: 1
    },
    {
        question: "Why does Ramsey suggest using cash for everyday purchases?",
        choices: [
            "It builds a high credit score",
            "It feels more personal than cards",
            "It increases spending limits",
            "It reduces long-term debt"
        ],
        correctAnswer: 1
    },
    {
        question: "What does Ramsey say about saving for vacations?",
        choices: [
            "Finance it with low-interest loans",
            "Use credit cards to cover costs",
            "Create a vacation sinking fund",
            "Skip vacations until debt-free"
        ],
        correctAnswer: 2
    },
    {
        question: "Why does Ramsey suggest keeping an emergency fund in cash?",
        choices: [
            "It allows easy access in emergencies",
            "It earns higher interest",
            "It can’t be taxed",
            "It increases credit limits"
        ],
        correctAnswer: 0
    },
    {
        question: "What does Ramsey recommend doing with your tax refund?",
        choices: [
            "Spend it on a vacation",
            "Apply it to your debt snowball",
            "Invest it in stocks",
            "Use it as extra monthly income"
        ],
        correctAnswer: 1
    },
    {
        question: "According to Ramsey, why should you avoid co-signing loans?",
        choices: [
            "It raises your credit score",
            "It can create debt for the co-signer",
            "It ensures higher interest",
            "It limits co-signer income"
        ],
        correctAnswer: 1
    },
    {
        question: "Why does Ramsey discourage consolidating debt?",
        choices: [
            "It doesn’t address spending habits",
            "It increases credit scores",
            "It decreases total debt",
            "It simplifies finances"
        ],
        correctAnswer: 0
    },
    {
        question: "What’s the best way to handle an irregular income, according to Ramsey?",
        choices: [
            "Only spend what's absolutely necessary",
            "Budget for essentials and save the rest",
            "Use credit cards to cover gaps",
            "Spend more when you make more"
        ],
        correctAnswer: 1
    },
    {
        question: "In the Total Money Makeover, why is Baby Step 1 crucial?",
        choices: [
            "It builds emergency savings",
            "It invests for retirement",
            "It reduces high-interest debt",
            "It covers living expenses"
        ],
        correctAnswer: 0
    },
    {
        question: "Why does Ramsey encourage working extra jobs temporarily?",
        choices: [
            "To pay off debt faster",
            "To build credit",
            "To invest in the stock market",
            "To increase emergency fund size"
        ],
        correctAnswer: 0
    },
    {
        question: "What does Ramsey recommend doing once all debts (except the mortgage) are paid?",
        choices: [
            "Reduce work hours",
            "Start investing aggressively",
            "Increase lifestyle spending",
            "Build a college fund for kids"
        ],
        correctAnswer: 1
    },
    {
        question: "Why is it important to avoid impulse buying?",
        choices: [
            "It increases your credit score",
            "It helps you stick to your budget",
            "It allows you to buy what you really want",
            "It simplifies financial planning"
        ],
        correctAnswer: 1
    },
    {
        question: "According to Ramsey, when is it acceptable to borrow money?",
        choices: [
            "For emergencies",
            "For investments",
            "For appreciating assets",
            "Never, under any circumstances"
        ],
        correctAnswer: 3
    },
    {
        question: "Why does Ramsey advocate living on less than you make?",
        choices: [
            "To impress others",
            "To save for future needs",
            "To build a higher credit score",
            "To prepare for luxury expenses"
        ],
        correctAnswer: 1
    },
    {
        question: "What does Ramsey say about home equity loans?",
        choices: [
            "They are a smart financial tool",
            "They are a backup emergency fund",
            "They are a risky form of debt",
            "They are great for home improvement"
        ],
        correctAnswer: 2
    },
    {
        question: "According to Dave Ramsey, what is the best way to handle student loans?",
        choices: [
            "Pay them off as soon as possible",
            "Refinance for lower interest",
            "Make minimum payments to save cash",
            "Use them to build credit"
        ],
        correctAnswer: 0
    },
    {
        question: "Why does Ramsey discourage store credit cards?",
        choices: [
            "They offer poor rewards",
            "They encourage unnecessary spending",
            "They build credit too slowly",
            "They have high annual fees"
        ],
        correctAnswer: 1
    }
];

export default questions;