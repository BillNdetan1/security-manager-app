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
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32139493355"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32139493356"?: PrimitiveOverrideProps<FlexProps>;
    Section39493363?: PrimitiveOverrideProps<FlexProps>;
    label39493364?: PrimitiveOverrideProps<TextProps>;
    link39493365?: PrimitiveOverrideProps<FlexProps>;
    icon39493366?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39493367?: MyIconProps;
    Button39213863?: PrimitiveOverrideProps<ButtonProps>;
    Section39493377?: PrimitiveOverrideProps<FlexProps>;
    label39493378?: PrimitiveOverrideProps<TextProps>;
    link39493379?: PrimitiveOverrideProps<FlexProps>;
    icon39493380?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39493381?: MyIconProps;
    Button39214138?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
