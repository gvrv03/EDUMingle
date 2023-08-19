import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { fontSize } from "@mui/system";

export default function DatePickerValue() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <div className="bottom-0 rounded-t-3xl absolute p-5 -ml-3 border-t">
      <h5 className="text-sm font-semibold my-2">Select Date</h5>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Start Date" defaultValue={dayjs("2022-04-17")} />
        </DemoContainer>{" "}
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="End Date" defaultValue={dayjs("2022-04-17")} />
        </DemoContainer>
      </LocalizationProvider>

      <div className="flex gap-5">
        <button className="bg-gray-100  font-semibold  rounded-md  p-2 w-full mt-5" type="button">
          Today
        </button>
        <button className="pBtn p-2 w-full mt-5  rounded-md " type="button">
          Apply
        </button>{" "}
      </div>
    </div>
  );
}
