/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CelestiaHero1OverridesProps = {
    CelestiaHero1?: PrimitiveOverrideProps<ViewProps>;
    BG?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Artboard 1@4x 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Content Left"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Find your Center"?: PrimitiveOverrideProps<TextProps>;
    "Gems that ground you, bringing a sense of balance amidst the chaos."?: PrimitiveOverrideProps<TextProps>;
    Form?: PrimitiveOverrideProps<FlexProps>;
    Email?: PrimitiveOverrideProps<FlexProps>;
    "sign up"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type CelestiaHero1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CelestiaHero1OverridesProps | undefined | null;
}>;
export default function CelestiaHero1(props: CelestiaHero1Props): React.ReactElement;
