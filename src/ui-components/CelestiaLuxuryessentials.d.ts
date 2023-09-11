/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CelestiaLuxuryessentialsOverridesProps = {
    CelestiaLuxuryessentials?: PrimitiveOverrideProps<ViewProps>;
    Products?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CelestiaLuxuryessentialsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CelestiaLuxuryessentialsOverridesProps | undefined | null;
}>;
export default function CelestiaLuxuryessentials(props: CelestiaLuxuryessentialsProps): React.ReactElement;
