/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingPricingOverridesProps = {
    MarketingPricing?: PrimitiveOverrideProps<FlexProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    Pricing?: PrimitiveOverrideProps<TextProps>;
    "Choose your plan"?: PrimitiveOverrideProps<TextProps>;
    "Frame 63"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 39029766683"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 42939393278"?: PrimitiveOverrideProps<FlexProps>;
    "Basic Plan"?: PrimitiveOverrideProps<TextProps>;
    "$10/mo"?: PrimitiveOverrideProps<TextProps>;
    "Billed Monthly"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13829766688"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039393324"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39393299?: MyIconProps;
    "Threat Detection"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13929766692"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43139393330"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39393331?: MyIconProps;
    "Log Monitoring"?: PrimitiveOverrideProps<TextProps>;
    Button29766686?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 39039393391"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 42939393392"?: PrimitiveOverrideProps<FlexProps>;
    "DNA Plan"?: PrimitiveOverrideProps<TextProps>;
    "$30/mo"?: PrimitiveOverrideProps<TextProps>;
    "Billed annually"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13839393396"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039393397"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39393398?: MyIconProps;
    "Basic Plan Features"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13939393400"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43139393401"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39393402?: MyIconProps;
    "Accesses to State of The Art Global Risk Registers"?: PrimitiveOverrideProps<TextProps>;
    "Frame 137"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039393405"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39393406?: MyIconProps;
    "Enhanced Certified Training Modules"?: PrimitiveOverrideProps<TextProps>;
    Button39393408?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MarketingPricingProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingPricingOverridesProps | undefined | null;
}>;
export default function MarketingPricing(props: MarketingPricingProps): React.ReactElement;
