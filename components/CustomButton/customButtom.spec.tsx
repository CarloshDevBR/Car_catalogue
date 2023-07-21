import { render, screen } from '@testing-library/react'

import { CustomButton } from './index'

describe("CustomButtom",() => {
    it("should render currectly", () => {
        render(<CustomButton />)

    })
})