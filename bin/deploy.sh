yarn push

# get last deployment id
LAST_DEPLOYMENT_ID=$( yarn clasp deployments | pcregrep -o1 '\- ([A-Za-z0-9\-\_]+) @\d+ - web app meta-version' )

if [ -z "$LAST_DEPLOYMENT_ID" ];then
    LAST_DEPLOYMENT_ID=$( yarn clasp deployments | tail -1 | pcregrep -o1 '\- ([A-Za-z0-9\-\_]+)' )
fi


# deploy
yarn clasp deploy --deploymentId $LAST_DEPLOYMENT_ID
