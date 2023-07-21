import { CarProps } from "@/types"

export const CarCard = ({ car }: { car: CarProps }) => {
    const { city_mpg, year, make, model, transmission, drive } = car

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p>
                <span>
                    Car Rent...
                </span>
            </p>
        </div>
    )
}