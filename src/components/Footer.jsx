import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <div className=' flex flex-col gap-10 text-[12px] 2xl:mx-30 lg:mx-20 mx-5 text-[#3f3e3e] mt-50 mb-10'>
            <div className='flex items-center gap-3'>
                <FiFacebook size={25} />
                <FaInstagram size={25} />
                <FiLinkedin size={25} />
            </div>

            <div className='flex flex-col gap-3'>
                <p>Better Mortgage's One Day Mortgage"' promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a
                    mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud
                    and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting
                    approval will result in a final underwriting approval. See One Day Mortgage"* Terms and Conditions.</p>
                <p>Better Mortgage's One Day HELOCtU promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC
                    loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-
                    money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will
                    result in final underwriting approval. See One Day HeloctU Terms and Conditions.</p>
                <p>Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better
                    Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an
                    appraisal is required to calculate a borrower's home value.</p>
            </div>
            <hr />
            <div className='flex flex-col gap-3.5'>
                <p>0 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate
                    California lnc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides
                    home inspection services. All rights reserved.</p>
                <p>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511.1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arrange
                    pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</p>
                <p>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California
                    Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC's license
                    numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents ("Better Real Estate Partner Agents"). Equal
                    Housing Opportunity. All rights reserved.</p>
                <p>New York State Housing and Anti-Discrimination Notice</p>
                <p>New York Standard Operating Procedures</p>
                <p>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593.325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
                <p>Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home &
                    Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable
                    and legal and regulatory requirements. Products not available in all states.</p>
                <p>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance
                    Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and
                    Trademark Office and is owned by Better Cover, LLC.</p>
            </div>

        </div>
    )
}

export default Footer
