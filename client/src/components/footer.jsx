import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary w-full px-[4rem] py-[2rem] pb-3 text-primary-foreground">
      <div className="grid grid-cols-6 gap-x-6 border-b-1 border-b-white pb-[3rem] mb-[1rem]">
        <div className="col-span-2 flex flex-col gap-2 mr-[6rem]">
          <img
            src="/logo.png"
            alt="company logo"
            className="h-[100px] w-1/2 "
          />
          <p className="line-clamp-3 mr-[1.4rem] font-[16px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quia!
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-2">Important Links</h3>
          <ul className="flex flex-col gap-y-2">
            <li className="text-sm">Contact Us</li>
            <li className="text-sm">Privacy Policy</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col gap-y-2 text-sm">
            <li>Terms & conditions</li>
            <li>Contact Support</li>
            <li className="flex gap-4">
              <img src="/fb.svg" className="max-h-[28px]" alt="facebook logo" />
              <img src="/insta.svg" className="max-h-[28px]" alt="instagram logo" />
              <img src="/linkedIn.svg" className="max-h-[28px]" alt="linkedIn logo" />
              <img src="/skype.svg" className="max-h-[28px]" alt="skype logo" />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center font-[16px]">
        Copyright © 2025. All rights reserved.
      </p>
    </footer>
  )
}
