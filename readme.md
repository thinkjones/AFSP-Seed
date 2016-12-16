AFSP-Seed Project:

Angular -> Flask -> SQLAlchemy -> Postgres

# Pre-requisite Env
brew install python
pip install --upgrade pip setuptools
sudo pip install virtualenv
pip install virtualenv

# Pre-requisite Postgres
brew install postgresql
pg_ctl -D /usr/local/var/postgres start
psql then createdb afsp_seed_dev

# Setup env
virtualenv venv --distribute
source venv/bin/activate
pip install -r requirements.txt
 

# Run
source .alias
pg_ctl -D /usr/local/var/postgres start
python -m server/app run
