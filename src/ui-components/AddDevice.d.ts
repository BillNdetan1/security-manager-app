/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AddDeviceInputValues = {
    timeStamp?: string;
};
export declare type AddDeviceValidationValues = {
    timeStamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddDeviceOverridesProps = {
    AddDeviceGrid?: PrimitiveOverrideProps<GridProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddDeviceProps = React.PropsWithChildren<{
    overrides?: AddDeviceOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AddDeviceInputValues) => AddDeviceInputValues;
    onSuccess?: (fields: AddDeviceInputValues) => void;
    onError?: (fields: AddDeviceInputValues, errorMessage: string) => void;
    onChange?: (fields: AddDeviceInputValues) => AddDeviceInputValues;
    onValidate?: AddDeviceValidationValues;
} & React.CSSProperties>;
export default function AddDevice(props: AddDeviceProps): React.ReactElement;
