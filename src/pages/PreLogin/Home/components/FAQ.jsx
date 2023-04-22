import React from 'react'

import { Disclosure } from '@headlessui/react'
import { RiArrowUpSLine } from 'react-icons/ri'

const FAQ = () => {

    const faq = [
        {
            qus: 'What is Material Tailwind?',
            ans: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus ?'
        },
        {
            qus: 'What is Material Tailwind?',
            ans: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus ?'
        },
        {
            qus: 'What is Material Tailwind?',
            ans: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus ?'
        },
        {
            qus: 'What is Material Tailwind?',
            ans: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus ?'
        },
        {
            qus: 'What is Material Tailwind?',
            ans: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus ?'
        },
        {
            qus: 'What is Material Tailwind?',
            ans: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus ?'
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