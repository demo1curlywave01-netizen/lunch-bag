"use client";

import React from "react";
import { singleComboMenu } from "@/content/menu-data";
import { SingleMenuShowcase } from "./SingleMenuShowcase";

// Backward compatible export redirecting to SingleMenuShowcase
export function WeeklyMenuCalendar() {
  return <SingleMenuShowcase />;
}
