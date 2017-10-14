#!/bin/bash

get_config() {
  marmoym_config_repo="git@github.com:tymsai/marmoym-config.git"
  parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
  internals_path="${parent_path}/../"

  if [ -d "${internals_path}/marmoym-config/.git" ]; then
    echo "Rebasing marmoym-config";
    cd ${internals_path}/marmoym-config;
    git pull --rebase;
  else
    echo "Configuration is missing. It is either you are not permitted
to access the source or have not installed it yet.";
    cd ${internals_path}; 
    git clone "${marmoym_config_repo}";
  fi
}

get_config