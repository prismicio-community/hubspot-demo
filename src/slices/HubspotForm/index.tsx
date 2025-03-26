"use client";

import { FC, useEffect, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Skeleton from "@/components/Skeleton";
import { useHubspotForm } from "next-hubspot";

/**
 * Props for `HubspotForm`.
 */
export type HubspotFormProps = SliceComponentProps<Content.HubspotFormSlice>;

/**
 * Component for "HubspotForm" Slices.
 */
const HubspotForm: FC<HubspotFormProps> = ({ slice }) => {
  const [showForm, setShowForm] = useState(false);
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "",
    formId: slice.primary.form_id || "",
    target: "#hubspot-form-wrapper",
  });

  useEffect(() => {
    if (formCreated && loaded) {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 2000); // 2 second delay for demo purposes

      return () => clearTimeout(timer);
    }
  }, [formCreated, loaded]);

  if (error) {
    console.log(error);
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-2xl p-12">
        <div
          id="hubspot-form-wrapper"
          style={{ display: showForm ? "block" : "none" }}
        />
        {!showForm && <Skeleton type={slice.primary.loader_type} />}
      </div>
    </section>
  );
};

export default HubspotForm;
