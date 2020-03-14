import { useState } from "react";

export const useDrawer = initialValue => {
  const [open, setOpen] = useState(initialValue);

  return {
    open,
    setOpen,
    reset: () => setOpen(false),
    bind: {
    open,
      onClick: event => {
        setOpen(event);
      }
    }
  };
};