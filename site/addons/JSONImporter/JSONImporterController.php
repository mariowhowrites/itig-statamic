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

    public function import_json() {

        $distributions = json_decode(file_get_contents($this->getDirectory() . "/distributions.json"));
        $count = count($distributions);

        for ($i = 0; $i < $count; $i++) {

            $state = $distributions[$i];

            $slug = strtolower($state[0]);
            if (preg_match('/\s/', $slug)) {
                $slug = str_replace(" ", "-", $slug);
            }

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

            $entry->save();
        }

        echo "All done!";
    }
}
