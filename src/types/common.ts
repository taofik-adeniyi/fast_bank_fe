import { CSSProperties, ReactNode } from "react";

export interface CommonProps {
    children?: ReactNode,
    className?: string
    style?: CSSProperties
}