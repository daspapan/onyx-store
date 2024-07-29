"use client";

import { useAdminContext } from '@/context/AdminContext';
import { Button, Flex, useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface NavBarProps {
    className?: string;
}

const NavBar = ({className}:NavBarProps) => {

    const { authStatus } = useAuthenticator((context) => [context.authStatus]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { isAdmin } = useAdminContext();

    useEffect(() => {
        if (authStatus !== "configuring") {
          setIsAuthenticated(authStatus === "authenticated");
        }
    }, [authStatus]);

    const router = useRouter();

    const signOutSignIn = async () => {
        if (isAuthenticated) {
            await signOut();
        } else {
            router.push("/signin");
        }
    };

    const defaultRoutes = [
        {
            href: "/",
            label: "My X Store",
        },
        {
            href: "/admin/product-create",
            label: "Add Product",
            isAdmin: true,
        },
    ];
    
    const routes = defaultRoutes.filter((route) => {
        return route.isAdmin === isAdmin || route.isAdmin === undefined;
    });

    return (
        <div className={className}>
            <Flex
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                padding="1rem"
            >
                <Flex as="nav" alignItems="center" gap="3rem" margin="0 2rem">

                    {routes.map((route) => (
                        <Link key={route.href} href={route.href}>
                            {route.label}
                        </Link>
                    ))}
                </Flex>

                <Button
                    variation="primary"
                    borderRadius="2rem"
                    className="mr-4"
                    onClick={signOutSignIn}
                >
                    {isAuthenticated ? "Sign Out" : "Sign In"}
                </Button>
            </Flex>
        </div>
    )
}

export default NavBar