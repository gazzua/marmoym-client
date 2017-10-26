#!/bin/bash

get_marmoym_i18n() {
  marmoym_i18n_repo="git@github.com:tymsai/marmoym-i18n.git"
  parent_path=$(cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P)
  server_path="${parent_path}/../../server"

  if [ -d "${internals_path}/marmoym-i18n/.git" ]; then
    echo "Rebasing marmoym-i18n";
    cd ${internals_path}/marmoym-i18n;
    git pull --rebase;
  else
    echo "Configuration is missing. It is either you are not permitted
to access the source or have not installed it yet.";
    cd ${server_path}; 
    git clone "${marmoym_i18n_repo}";
  fi
}

get_marmoym_i18n