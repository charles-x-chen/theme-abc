#!/bin/bash

github_user=$1
allowed_users_list=$2

if [ -z "$allowed_users_list" ]; then
    echo "Invalid user list. Please specify list of allowed users."
    exit 1
fi

allowed_users_list="|${allowed_users_list}|" # wrapping around pipe

echo "Checking if user '$github_user' is in '$allowed_users_list'"

# Check if the username exist in the users list provided
if [[ "$allowed_users_list" == *"|$github_user|"* ]]; then
    echo "Valid User"
else
    echo "Invalid User. You don't have permission to run this workflow..."
    exit 1
fi
