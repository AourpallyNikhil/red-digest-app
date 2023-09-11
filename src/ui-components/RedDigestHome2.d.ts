/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RedDigestHome2OverridesProps = {
    RedDigestHome2?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Transhumans Experiments"?: PrimitiveOverrideProps<ImageProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    "Left Menu"?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<FlexProps>;
    Blush40592373?: PrimitiveOverrideProps<TextProps>;
    "Menu Options"?: PrimitiveOverrideProps<FlexProps>;
    Blush40592375?: PrimitiveOverrideProps<TextProps>;
    "icon128 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type RedDigestHome2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RedDigestHome2OverridesProps | undefined | null;
}>;
export default function RedDigestHome2(props: RedDigestHome2Props): React.ReactElement;
