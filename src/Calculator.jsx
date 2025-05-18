import React, { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import dtiformula from './assets/dti-formula.webp'
import dtiExample from './assets/dti-example.webp'
import monthlyMortage from './assets/monthly-mortgage.webp'
import Better from './components/Better'
import Footer from './components/Footer'

const Calculator = () => {
    const inputRef = useRef()

    const [homePrice, setHomePrice] = useState(300000)
    const [downPayment, setDownPayment] = useState(60000)
    const [interestRate, setInterestRate] = useState(6.5)
    const [loanLength, setLoanLength] = useState(30)
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [zipCode, setZipCode] = useState(560001)

    const propertyTax = Math.round(homePrice * 0.0125 / 12)
    const homeInsurance = 100
    const hoaFees = 50
    const utilities = 150

    useEffect(() => {
        const loanAmount = homePrice - downPayment
        const monthlyInterest = interestRate / 100 / 12
        const totalMonths = loanLength * 12

        if (loanAmount <= 0) {
            setMonthlyPayment(0)
            return
        }

        const monthly =
            (loanAmount * monthlyInterest) /
            (1 - Math.pow(1 + monthlyInterest, -totalMonths))

        setMonthlyPayment(monthly.toFixed(2))
    }, [homePrice, downPayment, interestRate, loanLength])

    return (
        <>
            <Navbar bgColor={'white'} txtColor={'black'} />
            <div className="bg-[#f0f7f1] flex flex-col gap-7 py-20 px-5 md:px-20">
                <h1 className="text-[32px] md:text-[45px] font-medium">Mortgage calculator</h1>
                <p className="md:w-[60%] text-[16px] md:text-[18px]">
                    Our mortgage calculator includes key factors like homeowners association
                    fees, property taxes, and private mortgage insurance (PMI). Get the whole
                    picture and calculate your total monthly payment.
                </p>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                    <div className="flex flex-col gap-2 w-full md:w-[30%]">
                        <span className="font-medium">Home Price</span>
                        <input
                            type="number"
                            className="border bg-white focus:outline-none text-[#000000] py-2 px-4 rounded-lg hover:border-green-600 text-[24px] font-medium"
                            value={homePrice}
                            onChange={(e) => setHomePrice(Number(e.target.value))}
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium">Monthly Payment</span>
                        <h1 className="text-[28px] font-medium">${monthlyPayment}/mo</h1>
                    </div>
                    <button className="bg-[#017848] text-white px-6 py-3 rounded-lg">
                        Get pre-approved
                    </button>
                </div>

                <input
                    type="range"
                    min="1"
                    max="100"
                    value={homePrice / 30000}
                    ref={inputRef}
                    onChange={(v) => setHomePrice(v.target.value * 30000)}
                    className="w-full h-1 accent-black bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:hover:scale-110 transition-transform duration-200"
                />

                <div className="flex flex-col md:flex-row justify-between items-start gap-5">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">ZIP Code</span>
                            <input
                                type="number"
                                className="px-5 py-3 border bg-white focus:outline-none text-[#000000] font-medium rounded-lg"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">Down payment</span>
                            <input
                                type="number"
                                className="px-5 py-3 border bg-white focus:outline-none text-[#000000] font-medium rounded-lg"
                                value={downPayment}
                                onChange={(e) => setDownPayment(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">Interest rate</span>
                            <input
                                type="number"
                                step="0.01"
                                className="px-5 py-3 border bg-white focus:outline-none text-[#000000] font-medium rounded-lg"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">Length of loan (years)</span>
                            <select
                                className="px-5 py-3 border bg-white focus:outline-none text-[#000000] rounded-lg w-full"
                                value={loanLength}
                                onChange={(e) => setLoanLength(Number(e.target.value))}
                            >
                                <option value={30}>30</option>
                                <option value={20}>20</option>
                                <option value={10}>10</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10 py-20 px-5 md:px-20">
                <div className="flex flex-col gap-5 w-full md:w-[45%]">
                    <p className="text-[20px] font-medium">Monthly payment breakdown</p>
                    <h1 className="text-[27px] font-semibold">
                        ${(parseFloat(monthlyPayment) + propertyTax + homeInsurance + hoaFees + utilities).toFixed(2)}/mo
                    </h1>
                </div>
                <div className="w-full md:w-[50%] flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold pl-2 border-l-4 rounded-sm border-[#004733]">Principal & interest</span>
                        <h1>${monthlyPayment}</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold pl-2 border-l-4 rounded-sm border-[#800080]">Property taxes</span>
                        <input
                            type="number"
                            className="px-5 w-[30%] py-3 border bg-white focus:outline-none rounded-lg"
                            value={propertyTax}
                            readOnly
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold pl-2 border-l-4 rounded-sm border-[#ffc0cb]">Homeowners insurance</span>
                        <input
                            type="number"
                            className="px-5 w-[30%] py-3 border bg-white focus:outline-none rounded-lg"
                            value={homeInsurance}
                            readOnly
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold pl-2 border-l-4 rounded-sm border-[#ffff00]">HOA fees</span>
                        <input
                            type="number"
                            className="px-5 w-[30%] py-3 border bg-white focus:outline-none rounded-lg"
                            value={hoaFees}
                            readOnly
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold pl-2 border-l-4 rounded-sm border-[#ffa500]">Utilities</span>
                        <input
                            type="number"
                            className="px-5 w-[30%] py-3 border bg-white focus:outline-none rounded-lg"
                            value={utilities}
                            readOnly
                        />
                    </div>
                    <button className="bg-[#f3f8f3] px-7 py-5 rounded-lg w-fit text-green-900 font-medium">
                        Copy estimate link
                    </button>
                </div>
            </div>

            <div className='md:mx-20 mx-5 flex flex-col gap-10 py-15'>
                <hr />
                <h1 className='text-3xl font-medium'>How does mortgage calculator help me?</h1>
                <p className=' text-[#555754]'>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
            </div>
            <div className='md:mx-20 mx-5 flex flex-col gap-10 pb-15'>
                <hr />
                <h1 className='text-3xl font-medium' >How much monthly mortgage payment can I afford?</h1>
                <p className=' text-[#555754]'>Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.</p>
                <p className=' text-[#555754]'>Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It's most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>
            </div>

            <div className='flex flex-col justify-start  items-center gap-2 px-5 text-center'>
                <p className=''>Formula for calculating your debt-to-income (DTI) ratio:</p>
                <img className='md:w-[40%] w-[80%]' src={dtiformula} alt="dti-formula" />
                <p>Here's an example of what calculating your DTI might look like:</p>
                <img className='md:w-[40%] w-[80%]' src={dtiExample} alt="dti-example" />
            </div>
            <div className='md:mx-20 mx-5 flex flex-col gap-10 py-15'>
                <hr />
                <h1 className='text-3xl font-medium'>How to calculate monthly mortgage payments?</h1>
                <p>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it's a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
                <h2 className='font-semibold text-[18px]'>Formula for calculating monthly mortgage payments</h2>
                <p>The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here's the formula for calculating principal and interest yourself:</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img className='md:w-[50%] w-[80%]' src={monthlyMortage} alt="monthly-mortage" />
                <div className='flex flex-col gap-2 px-5'>
                    <span className='font-medium'>Where:</span>
                    <div className='flex flex-col'>
                        <li> M is monthly mortgage payments</li>
                        <li>P is the principal loan amount (the amount you borrow)</li>
                        <li>r is the monthly interest rate</li>
                        <li>n is the total number of payments in months</li>
                    </div>
                </div>
            </div>
            <div className='md:mx-20 mx-5 my-20'>
                <p>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
            </div>
            <div className='flex flex-col gap-10 md:mx-20 mx-5 pb-10'>
                <hr />
                <h1 className='text-3xl font-medium'>How to use this mortgage calculator?</h1>
                <p className='text-[#6b6b6a]'>Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.</p>
                <p className='text-[#6b6b6a]'>Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that's less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we've included a utilities estimate that you can break down by service. If you're thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.</p>
                <p className='text-[#6b6b6a]'>The only amounts we haven't included are the money you'll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.
                    <p className='text-[#6b6b6a]'>Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>
                </p>
            </div>
            <Better />
            <Footer />
        </>
    )
}

export default Calculator
