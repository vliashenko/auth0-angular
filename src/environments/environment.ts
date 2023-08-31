type Auth = {
    domain: string;
    clientId: string;
}

type Env = {
    production: boolean;
    auth: Auth;
}

export const environment: Env = {
    production: false,
    auth: {
        domain: 'dev-0fso76wnzfctcjqu.us.auth0.com',
        clientId: 'uFlqdzFBBqGpI9vSQRTNYHIzBrl8JzDW',
    }
};