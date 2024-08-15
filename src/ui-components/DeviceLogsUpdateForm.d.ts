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
export declare type DeviceLogsUpdateFormInputValues = {
    timeStamp?: string;
};
export declare type DeviceLogsUpdateFormValidationValues = {
    timeStamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeviceLogsUpdateFormOverridesProps = {
    DeviceLogsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timeStamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DeviceLogsUpdateFormProps = React.PropsWithChildren<{
    overrides?: DeviceLogsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    deviceLogs?: any;
    onSubmit?: (fields: DeviceLogsUpdateFormInputValues) => DeviceLogsUpdateFormInputValues;
    onSuccess?: (fields: DeviceLogsUpdateFormInputValues) => void;
    onError?: (fields: DeviceLogsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeviceLogsUpdateFormInputValues) => DeviceLogsUpdateFormInputValues;
    onValidate?: DeviceLogsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DeviceLogsUpdateForm(props: DeviceLogsUpdateFormProps): React.ReactElement;
