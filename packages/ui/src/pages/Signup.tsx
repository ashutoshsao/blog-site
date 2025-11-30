"use client"

import type { userInput } from "@repo/types"
import { useState } from "react"
import { Header } from "../components/Header"
import { LabelledInput } from "../components/LabelledInput"
import { Button } from "../components/button"
import { Quote } from "../components/Quote"
import axios from "axios"

type SigninProps = {
    Link: any
    backendUrl: string
    sendDetailSuccess: () => void
}

export const Signup = ({ Link, backendUrl, sendDetailSuccess }: SigninProps) => {
    const [postInput, setPostinput] = useState<userInput>({
        name: "",
        email: "",
        password: ""
    })
    const SendDetails = async () => {
        try {
            const res = await axios.post(`${backendUrl}/api/v1/user/signup`, postInput);
            const token = res.data.token
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
                <Header Link={Link} heading="Create an account" subHeading="Already have an account?" redirect="Login" ref="signin" />
                <div className="flex flex-col gap-4 w-sm">
                    <LabelledInput label="Username" placeholder="Alexander" onChange={(e) => {
                        setPostinput({
                            ...postInput,
                            name: e.target.value
                        })
                    }} />
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
                    <Button buttonLabel="Signup" onClick={SendDetails} />
                </div>
            </div>
        </div>
        <div className="hidden xl:block">
            <Quote quote="The customer service I recieved was exceptional. The support team went above and beyond to address my concern." name="Ashutosh sao" position="CEO| ACXM, Inc" />
        </div>
    </div>
}