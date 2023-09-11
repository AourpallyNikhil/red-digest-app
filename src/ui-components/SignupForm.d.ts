/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignupFormOverridesProps = {
    SignupForm?: PrimitiveOverrideProps<ViewProps>;
    "Input/Text Style 1"?: PrimitiveOverrideProps<FlexProps>;
    "Button/Primary/With Icon"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type SignupFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SignupFormOverridesProps | undefined | null;
}>;
export default function SignupForm(props: SignupFormProps): React.ReactElement;
