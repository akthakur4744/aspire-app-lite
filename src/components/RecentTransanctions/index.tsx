import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import StorageLogo from "./Transaction/assets/file-storage.svg";
import flightLogo from "./Transaction/assets/flights.svg";
import megaphoneLogo from "./Transaction/assets/megaphone.svg";
import Transaction from "./Transaction";

const transactions = [
  {
    vendor: "Hamleys",
    date: "20 May 2020",
    transactionAmount: "150",
    transactionType: "credit",
    remarks: "Refund on debit card",
    vendorIcon: StorageLogo,
  },
  {
    vendor: "Hamleys",
    date: "20 May 2020",
    transactionAmount: "150",
    transactionType: "debit",
    remarks: "Charged to debit card",
    vendorIcon: flightLogo,
  },
  {
    vendor: "Hamleys",
    date: "20 May 2020",
    transactionAmount: "120",
    transactionType: "debit",
    remarks: "Charged to debit card",
    vendorIcon: megaphoneLogo,
  },
  {
    vendor: "Hamleys",
    date: "20 May 2020",
    transactionAmount: "150",
    transactionType: "credit",
    remarks: "Refund on debit card",
    vendorIcon: StorageLogo,
  },
];

export default function RecentTransactions() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {transactions.map((transaction, i) => (
        <React.Fragment>
          <Transaction
            key={i+transaction.date}
            vendor={transaction.vendor}
            date={transaction.date}
            transactionAmount={transaction.transactionAmount}
            transactionType={transaction.transactionType}
            remarks={transaction.remarks}
            vendorIcon={transaction.vendorIcon}
          />
          {i !== transactions.length - 1 && (
            <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
