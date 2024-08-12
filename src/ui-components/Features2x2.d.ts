/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type Features2x2OverridesProps = {
    Features2x2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13629766592"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13629766593"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37429766594"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424113"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424114?: MyIconProps;
    "Threat Detection"?: PrimitiveOverrideProps<TextProps>;
    "Our threat detection features allows business owners to feel at ease, knowing that their networks are secure from common threats."?: PrimitiveOverrideProps<TextProps>;
    "Frame 37329766597"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424116"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424117?: MyIconProps;
    "Log Monitoring"?: PrimitiveOverrideProps<TextProps>;
    "Real Time monitoring of all connected devices from one centralized location."?: PrimitiveOverrideProps<TextProps>;
    "Frame 393"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37429766601"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039403233"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39403234?: MyIconProps;
    "Global Risk Registers"?: PrimitiveOverrideProps<TextProps>;
    "Customizable risk registers to store and score risks. Makes resolving reoccurring incidents seamless."?: PrimitiveOverrideProps<TextProps>;
    "Frame 37329766604"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424110"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424111?: MyIconProps;
    "Training Modules"?: PrimitiveOverrideProps<TextProps>;
    "Access to state of the art training on best practices to keep your network secured, and available."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Features2x2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Features2x2OverridesProps | undefined | null;
}>;
export default function Features2x2(props: Features2x2Props): React.ReactElement;
