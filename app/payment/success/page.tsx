import { Metadata } from "next";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi2";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Payment Success",
};

const PaymentSuccess = ({
  searchParams,
}: {
  searchParams: { transaction_status?: string };
}) => {
  const paymentStatus = searchParams.transaction_status;

  if (paymentStatus === "pending") redirect("/payment/pending");
  if (paymentStatus === "failure") redirect("/payment/failure");

  return (
    <div className="max-w-screen-xl px-4 mx-auto py-20 mt-12">
      <div className="p-6 md:mx-auto">
        <HiCheckCircle className="text-green-500 mx-auto size-16" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your payment.
          </p>
          <p>Have A great Day!</p>

          <div className="py-10 text-center">
            <Link
              href="/myreservation"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 inline-block rounded"
            >
              Go to My Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
