import { FC } from "react";
import { Content } from "@prismicio/client";

type TSkeleton = {
  type: Content.HubspotFormSlice["primary"]["loader_type"];
};

function FieldSkeleton({
  type = "input",
  lableWidth = 70,
}: {
  lableWidth?: number;
  type?: "input" | "textarea" | "button";
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className="h-5 rounded-md animate-skeleton bg-gray-200"
        style={{
          width: lableWidth + "px",
          display: type === "button" ? "none" : "block",
        }}
      />
      <div
        className="w-full rounded-md animate-skeleton bg-gray-200"
        style={{
          height:
            type === "textarea" ? "66px" : type === "button" ? "38px" : "40px",
          marginTop: type === "button" ? "18px" : "0",
          width: type === "button" ? "90px" : "100%",
        }}
      />
    </div>
  );
}

const Skeleton: FC<TSkeleton> = ({ type }) => {
  switch (!!type) {
    case type === "1":
      return (
        <div className="flex flex-col items-start gap-[18px] w-full">
          <FieldSkeleton lableWidth={40} />
          <FieldSkeleton lableWidth={140} />
          <FieldSkeleton lableWidth={60} />
          <FieldSkeleton lableWidth={60} />
          <FieldSkeleton lableWidth={45} />
          <FieldSkeleton type="textarea" lableWidth={55} />
          <FieldSkeleton type="button" />
        </div>
      );
    case type === "2":
      return (
        <div className="flex flex-col items-start gap-[18px] w-full">
          <FieldSkeleton lableWidth={40} />
          <FieldSkeleton lableWidth={140} />
          <FieldSkeleton type="textarea" lableWidth={55} />
          <FieldSkeleton type="button" />
        </div>
      );
    default:
      return null;
  }
};

export default Skeleton;
