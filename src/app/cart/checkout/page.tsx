import { Navigation } from "@/src/components/checkout/Navigation";
import { Metadata } from "next";
import { CheckoutCheckbox } from "@/src/components/checkout/CheckoutCheckbox";
import { ShowCheckoutData } from "@/src/components/checkout/ShowCheckoutData";

export const metadata: Metadata = {
  title: "Checkout"
}

export default function page() {
  return (
    <>
      <Navigation />
      <h2 className="mb-12 font-inter text-4xl font-medium w-5/6 mx-auto">Billing Details</h2>
      <div className="flex flex-col w-5/6 mx-auto xl:flex-row xl:gap-44">
        <form className="xl:w-full" id="checkoutForm">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 opacity-50">First Name <span className="text-exclusive-secondary">*</span></label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="companyName" className="mb-2 opacity-50">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="streetAddress" className="mb-2 opacity-50">Street Address<span className="text-exclusive-secondary">*</span></label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apartmentFloorEtc" className="mb-2 opacity-50">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="apartmentFloorEt"
              id="apartmentFloorEt"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="townCity" className="mb-2 opacity-50">Town/City<span className="text-exclusive-secondary">*</span></label>
            <input
              type="text"
              name="townCity"
              id="townCity"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 opacity-50">Phone Number<span className="text-exclusive-secondary">*</span></label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 opacity-50">Email Address<span className="text-exclusive-secondary">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#F5F5F5] p-3 w-full rounded mb-8"
              required
            />
          </div>
          <CheckoutCheckbox />
        </form>
        <ShowCheckoutData />
      </div>
    </>
  )
}