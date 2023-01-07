import {render, screen} from '@testing-library/react';
import { User } from './user';

describe("Users", () => {
    test("render correctly" , () => {
        render(<User/>)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toBeInTheDocument()
    })
})