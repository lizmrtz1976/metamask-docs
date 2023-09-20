---
description: Connect your dapp to existing, third-party snaps.
sidebar_position: 5
---

# Work with third-party snaps

Some existing, third-party snaps are designed to communicate with dapps.
As a dapp developer, you can use these snaps to take advantage of new features enabled by snaps.
This is possible because [snaps can expose a JSON-RPC API](../reference/exports.md#onrpcrequest).
Snaps can decide to make their API available to dapps by requesting the
[`endowment:rpc`](../reference/permissions.md#endowmentrpc) permission.

## Connect to a snap

Connect to a snap by calling the [`wallet_requestSnaps`](../reference/rpc-api.md#wallet_requestsnaps)
method from your dapp.
If a user doesn't have the snap installed in their MetaMask wallet, MetaMask prompts the user to
install the snap.
The following are different possible outcomes from calling `wallet_requestSnaps`.

### User rejects the installation request

If the user rejects the installation request, the call to `wallet_requestSnaps` throws the following error:

```json
{ "code": 4001, "message": "User rejected the request." }
```

### User approves the installation request

If the user approves the installation request, the call to `wallet_requestSnaps` returns an object
with the following shape:

```json
{
    "SNAP_ID": {
        "blocked": false,
        "enabled": true,
        "id": "SNAP_ID",
        "initialPermissions": {
            // ...all the permissions in the snap's manifest
        },
        "version": "SNAP_VERSION"
    }
}
```

### Snap is already installed

If the snap is already installed, the call to `wallet_requestSnaps` returns the same object as for a
new installation of the snap, but the user won't see a confirmation pop-up asking them to install the snap.

:::caution important
Snaps are installed into the MetaMask instance of each user.
If a snap stores data, that data is specific to that user's MetaMask instance.
However, that data can be shared with multiple dapps.
Do not assume that data stored by a snap is unique to your dapp. 
:::

## Determine whether a snap is installed

Determine whether a snap is installed by calling the [`wallet_getSnaps`](../reference/rpc-api.md#wallet_getsnaps)
method from your dapp.
This method returns a list of only those snaps that are connected to your current dapp.

The response is in the form of an object keyed by the ID of the snap.
Each value is a nested object with additional information, such as the version of the snap that is installed.

:::note
`wallet_getSnaps` only returns the snaps that are connected to your dapp.
The user may have other snaps installed that your dapp is not aware of. 
:::

The following example verifies whether a snap with ID `npm:super-snap` is installed:

```ts
const snaps = await ethereum.request({
  method: 'wallet_getSnaps'
});

const isMySnapInstalled = Object.keys(snaps).includes('npm:super-snap');
```

If you need to work with a specific version of a snap, you can instead iterate over
`Object.values(snaps)`, and use the `id` and `version` properties inside each object to determine
whether the snap is installed with the required version.

:::note
A user cannot install multiple versions of a snap into a single MetaMask instance.
You should avoid requiring a specific version of a snap unless you absolutely need to.
In most cases, you should request the latest version of the snap and architect your dapp to be able
to work with that version.
:::

## Reconnect to a snap

At any time, a user can open their MetaMask Snaps settings menu and see all the dapps connected to a snap.
From that menu they can revoke a dapp connection.
If your dapp loses the connection to a snap, you can reconnect by calling
[`wallet_requestSnaps`](../reference/rpc-api.md#wallet_requestsnaps).
Since the snap is already installed, this returns a success response without MetaMask showing a pop-up.
However, if the user has disabled the snap, the response has `enabled` set to `false` for your `SNAP_ID`:

```json
{
    "SNAP_ID": {
        "blocked": false,
        "enabled": false,
        "id": "SNAP_ID",
        "initialPermissions": {
            // ...all the permissions in the snap's manifest
        },
        "version": "SNAP_VERSION"
    }
}
```