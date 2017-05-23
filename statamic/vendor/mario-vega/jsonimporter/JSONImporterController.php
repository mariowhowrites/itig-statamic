<?php

namespace Statamic\Addons\JSONImporter;

use Statamic\API\Entry;
use Statamic\Extend\Controller;

class JSONImporterController extends Controller
{
    /**
     * Maps to your route definition in routes.yaml
     *
     * @return Illuminate\Http\Response
     */
    public function index()
    {
        return $this->view('index');
    }

    /*
     * Imports JSON file. Currently hard-coded to accept input from a specific source, but could be parsed out into its own function.
     */
    public function import_json() {
        // Grab the JSON file
        $distributions = json_decode(file_get_contents($this->getDirectory() . "/distributions.json"));
        //count the # of entries so we don't have to calculate it in the loop every time
        $count = count($distributions);

        //begin entry addition loop
        for ($i = 0; $i < $count; $i++) {

            //collect current loop iteration into a variable
            $state = $distributions[$i];

            //create slug: lower-case, replace spaces with dashes
            $slug = strtolower($state[0]);
            if (preg_match('/\s/', $slug)) {
                $slug = str_replace(" ", "-", $slug);
            }

            //if our slug already exists in the given collection, do not build the entry
            if (Entry::whereSlug($slug, 'distributions')) {
                echo "Duplicate entry " . $state[0] . ", skipping" . PHP_EOL;
            }

            //otherwise, begin building entry
            else {
                //build entry using parsed data from JSON
                $entry = Entry::create($slug)
                    ->collection('distributions')
                    ->with(
                        [
                            'title' =>  $state[0],
                            'euip' =>  $state[1],
                            'percentage' =>  $state[2],
                            'ir_allocation' =>  $state[3],
                            'infrastructure_allocation' =>  $state[4],
                            'total_state_allocation' =>  $state[5],
                        ]
                    )
                    ->get();
                //once entry is built, save to collection
                $entry->save();
            }
        }
        //Confirmation message
        echo "All done!";
    }
}
