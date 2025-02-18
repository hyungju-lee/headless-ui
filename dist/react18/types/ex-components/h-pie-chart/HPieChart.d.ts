declare const HPieChart: ({ data, backgroundColor, borderColor, borderWidth, labelFillStyle, legendLabelsColor }: {
    data: {
        label: string;
        value: number;
    }[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    labelFillStyle?: string;
    legendLabelsColor?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default HPieChart;
