"use client";

import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { AdminContextProvider } from '@/context/AdminContext';
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify';
import output from '@/../amplify_outputs.json';

Amplify.configure(output, {ssr:true})

interface ClientSetupContextProviderProps {
    children: React.ReactNode
}

const ClientSetupContextProvider: React.FC<ClientSetupContextProviderProps> = ({children}) => {
    return (
        <Authenticator.Provider>
            <AdminContextProvider>
                {children}
            </AdminContextProvider>
        </Authenticator.Provider>
    )
}

export default ClientSetupContextProvider