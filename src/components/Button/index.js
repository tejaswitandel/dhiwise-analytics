import React from "react";
import PropTypes from "prop-types";

const variants = { FillIndigoA700: "bg-indigo_A700 text-white_A700" };
const sizes = { sm: "md:p-[10px] p-[15px] sm:p-[7px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["FillIndigoA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = { className: "", variant: "FillIndigoA700", size: "sm" };

export { Button };
