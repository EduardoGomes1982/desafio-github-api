import "./styles.css";

type Props = {
    buttonTitle: string;
};

export default function PrimaryButton({ buttonTitle }: Props) {
    return (
        <button id="primary-button" type="submit">
            {buttonTitle}
        </button>
    );
}