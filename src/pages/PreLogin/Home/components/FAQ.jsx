import React from 'react'

import { Disclosure } from '@headlessui/react'
import { RiArrowUpSLine } from 'react-icons/ri'

const FAQ = () => {

    const faq = [
        {
            qus: 'What is Creo Network?',
            ans: 'Creo Network is a blockchain-based freelancer marketplace that leverages AI algorithms to match freelancers with clients, and vice versa.'
        },
        {
            qus: 'How does Creo Network ensure security?',
            ans: 'Creo Network uses blockchain technology to ensure secure transactions, and all user data is encrypted and stored securely.'
        },
        {
            qus: 'How does the AI match-making algorithm work?',
            ans: 'The AI match-making algorithm takes into account factors such as skills, experience, and job requirements to connect freelancers with the most suitable job opportunities, and clients with the best candidates for their projects.'
        },
        {
            qus: 'What types of jobs are available on Creo Network?',
            ans: 'Creo Network offers a wide range of freelance jobs across various industries, including graphic design, writing, programming, and more.'
        },
        {
            qus: 'How do I get paid for my work on Creo Network?',
            ans: 'All transactions on Creo Network are conducted using cryptocurrency, which is automatically deposited into your linked wallet upon project completion.'
        },
        {
            qus: 'How do I create an account on Creo Network?',
            ans: 'Simply visit the Creo Network website and click "Sign Up" to create an account as either a freelancer or a client.'
        },
        {
            qus: 'What fees does Creo Network charge?',
            ans: 'Creo Network charges a small transaction fee for each project completed on the platform, which is automatically deducted from the total payment.'
        },
        {
            qus: 'How do I contact support on Creo Network?',
            ans: 'For any support inquiries, simply navigate to the "Contact Us" page on the Creo Network website and fill out the form provided.'
        },
    ]


    return (
        <div className='md:py-2 lg:py-6 relative'>
            <div className='container flex flex-col items-center gap-4'>
                <h2 className='md:w-[80%] text-center'>Frequently Asked Qustions</h2>
                <div className='bg-gradient w-20 h-[5px]'></div>

                <div className='w-full grid md:grid-cols-2 gap-4'>
                    {faq.map((item, index) => {
                        return (
                            <Disclosure key={index}>
                                {({ open }) => (
                                    <div>
                                        <Disclosure.Button className="flex w-full justify-between bg-accent px-3 py-4 rounded-card hover:transform hover:scale-[102%]">
                                            <span>{item.qus}</span>
                                            <RiArrowUpSLine
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-base">
                                            {item.ans}
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FAQ