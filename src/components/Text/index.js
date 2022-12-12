import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  h2: "text-[20px]",
  h3: "font-bold text-[18px]",
  h4: "text-[16px]",
  h5: "text-[14px]",
  h6: "font-normal text-[12px]",
  body1: "font-normal text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
