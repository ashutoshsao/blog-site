"use client"

import type { userInput } from "@repo/types"
import { useState } from "react"
import { Header } from "../components/Header"
import { LabelledInput } from "../components/LabelledInput"
import { Button } from "../components/button"
import { Quote } from "../components/Quote"
import axios from "axios"

type SignupProps = {
    Link: any
    backendUrl: string
    sendDetailSuccess: () => void
}

export const Signin = ({ Link, backendUrl, sendDetailSuccess }: SignupProps) => {
    const [postInput, setPostinput] = useState<userInput>({
        email: "",
        password: ""
    })

    const SendDetails = async () => {
        try {
            const res = await axios.post(`${backendUrl}/api/v1/user/signin`, postInput);
            const token = res.data.token;
            if (token) {
                localStorage.setItem("token", token);
            }

            sendDetailSuccess();  // trigger callback

        } catch (err: any) {
            console.error(err);

            // backend error response (e.g. user already exists)
            if (err.response?.data?.message) {
                alert(err.response.data.message);
            } else {
                alert("Something went wrong. Try again.");
            }
        }
    }

    return <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="h-screen flex justify-center bg-white">
            <div className="flex flex-col font-sans justify-center items-center gap-4 p-4">
                <Header Link={Link} heading="Login" subHeading="Don't have an account?" redirect="Signup" ref="signup" />
                <div className="flex flex-col gap-4 w-xs">
                    <LabelledInput label="Email" placeholder="Alexander@gmail.com" onChange={(e) => {
                        setPostinput({
                            ...postInput,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" placeholder="" type="password" onChange={(e) => {
                        setPostinput({
                            ...postInput,
                            password: e.target.value
                        })
                    }} />
                    <Button buttonLabel="Signin" onClick={SendDetails} />
                </div>
            </div>
        </div>
        <div className="hidden xl:block">
            <Quote quote="Billo Bagge Billeyan Da Ki Karengi,
            Bagge- Bagge Billeyan Da Ki Karengi." name="Kaka" position="Independent artist" />
        </div>
    </div>
}